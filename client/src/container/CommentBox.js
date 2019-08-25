import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';

class CommentBox extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        error: null,
        text: '',
        user_name : localStorage.getItem("user_name"),
        user: localStorage.getItem("user_id")
      };
      this.pollInterval = null;
    }
    
    componentDidMount() {
      this.loadCommentsFromServer();
      if (!this.pollInterval) {
        this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
      }
  }

    componentWillUnmount() {
        if (this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }
    
    onChangeText = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    
    onUpdateComment = (id) => {
        const oldComment = this.state.data.find(c => c._id === id);
        if (!oldComment) return;
        this.setState({ user: oldComment.user, text: oldComment.text, updateId: id });
    }
    
    onDeleteComment = (id) => {
        const i = this.state.data.findIndex(c => c._id === id);
        const data = [
          ...this.state.data.slice(0, i),
          ...this.state.data.slice(i + 1),
        ];
        this.setState({ data });
        fetch(`api/comment/${id}`, { method: 'DELETE' })
          .then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error });
          });
    }
    
    submitComment = (e) => {
        e.preventDefault();
        const { user, text, updateId } = this.state;
        if (!user || !text) return;
        if (updateId) {
          this.submitUpdatedComment();
        } else {
          this.submitNewComment();
        }
    }
    
    submitNewComment = () => {
        const { user,text } = this.state;
        const { user_name } = this.state;
        const { profile_username } = "this.props.id"
        const data = [...this.state.data, { user, text, _id: Date.now().toString() }];
        this.setState({ data });
        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch('https://teachonline.herokuapp.com/comment/create', {
          method: 'POST',
          mode: "cors",
          headers: myHeaders,
          body: JSON.stringify({ user ,text, profile_username }),
        }).then(res => res.json()).then((res) => {
          if (!res.success) this.setState({ error: res.error.message || res.error });
          else this.setState({ user: '', text: '', error: null });
        });
    }
    
    submitUpdatedComment = () => {
        const { user, text, updateId } = this.state;
        fetch(`/comment/${updateId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user, text }),
        }).then(res => res.json()).then((res) => {
          if (!res.success) this.setState({ error: res.error.message || res.error });
          else this.setState({ user: '', text: '', updateId: null });
        });
    }
    
    loadCommentsFromServer = () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    const URL='https://teachonline.herokuapp.com/comment/';
    let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
    fetch(URL + this.props.profile_name,
      {
          method:'GET',
          mode: "cors",
          headers : myHeaders
      })
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
}
    
    render() {
      const  { data } = this.state
        return (
          <div className="container">
            <div className="comments">
              <h2>Comments:</h2>
              <CommentList
                data= {data}
                handleDeleteComment={this.onDeleteComment}
                handleUpdateComment={this.onUpdateComment}
              />
            </div>
            <div className="form">
              <CommentForm
                user={this.state.user}
                text={this.state.text}
                handleChangeText={this.onChangeText}
                submitComment={this.submitComment}
              />
            </div>
            {this.state.error && <p>{this.state.error}</p>}
          </div>
        );
      }
    }
    
    export default CommentBox;