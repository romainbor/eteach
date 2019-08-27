import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'

const socketUrl = "https://teachonline.herokuapp.com"
export default class Layout extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	socket:null,
	  	user:null
	  };
	}

	componentWillMount() {
		console.log("toto");
		this.initSocket()
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		console.log("titi");
		let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
		const socket = io(socketUrl, {
			method:'GET',
			mode: "cors",
			headers : myHeaders
		})
		.then(response => response.json())
		.then(socket.on('connect', ()=>{
			console.log("Chat Connected");
		}))
		.catch(error => (error));

		
		
		this.setState({socket})
	}

	/*
	* 	Sets the user property in state 
	*	@param user {id:number, name:string}
	*/	
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}

	/*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})

	}


	render() {
		const { socket, user } = this.state
		return (
			<div>
				{
					!user ?	
					<LoginForm socket={socket} setUser={this.setUser} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}