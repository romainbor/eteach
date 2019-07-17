import React from 'react';
import CheckBox from '../components/checkBox.jsx';  

export default class RegisterForm extends React.Component{

    constructor() {
        // ...
        super();
    
        this.state = {
        newUser: {
          category: '',
          skills: [],
        },
        

        skillOptions: ["Français", "Mathématiques", "Anglais", "Sciences"]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCheckBox = this.handleCheckBox.bind(this);
      }
    state = {
        user_name:"",
        password:"",
        description:"" 
    }

    handleChange(event) {
        this.setState({
          category: event.target.value
        });
      }
      
    handleKeyUp = (event,field) => {
        const input = event.currentTarget;
        	this.setState({
	            [field] : input.value
	        });
        //}

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);        
    }

    handleCheckBox(e) {

      const newSelection = e.target.value;
      let newSelectionArray;
  
      if(this.state.newUser.skills.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
      } else {
        newSelectionArray = [...this.state.newUser.skills, newSelection];
      }
  
        this.setState( prevState => ({ newUser:
          {...prevState.newUser, skills: newSelectionArray }
        })
        )
  }
     
    render(){
        return(
          <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input onKeyUp={(event) => this.handleKeyUp(event,'user_name')}/>
                <label>Password</label>
                <input type="password" onKeyUp={(event) => this.handleKeyUp(event,'password')}/>
                <label>Description</label>
                <input type="textarea" cols={40} rows={10} onKeyUp={(event) => this.handleKeyUp(event,'description')}/>
                <label>Email</label>
                <input type="email" onKeyUp={(event) => this.handleKeyUp(event,'email')}/>
                <div>
                    <label><input type="radio" value="teacher" checked={this.state.category === "teacher"} onChange={this.handleChange}/> Professeur</label>
                    <label><input type="radio" value="student" checked={this.state.category === "student"} onChange={this.handleChange}/> Etudiant</label>
                </div>
                <CheckBox
                  title={"Skills"}
                  name={"skills"}
                  options={this.state.skillOptions}
                  selectedOptions={this.state.newUser.skills}
                  handleChange={this.handleCheckBox}
                />{" "}
                <button type="submit" >Submit</button>             
          </form>        
        );
    }
}