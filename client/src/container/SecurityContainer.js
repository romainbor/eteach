import React from 'react';
import{Switch, Route} from 'react-router-dom';
//import RegisterPage from '../views/RegisterPage/RegisterPage';
import RegisterForm from '../container/RegisterForm';
import LoginPage from '../views/LoginPage/LoginPage';
import { connect } from 'react-redux';
import { login } from '../redux/actions/security';
import { register } from '../redux/actions/security';
import {Redirect } from 'react-router-dom';

class SecurityContainer extends React.Component{

    handleSubmitLogin = (data) => {
        const { history } = this.props;
        this.props.login(data.username,data.password);
        history.push('/landing-page');
    }

    handleSubmitRegister = (data) => {
        const { history } = this.props;
        this.props.register(data.user_name,data.password,data.email,data.category, data.newUser.skills, data.description);
        history.push('/security/login');
    }
     
    render(){
        return(           
            <Switch>
                <Route path="/security/login" render={() => <LoginPage onSubmit={this.handleSubmitLogin}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmitRegister}/>}/>
                <Route path="/security/deconnexion" render={() => <RegisterForm onSubmit={this.handleSubmitDeconnexion}/>}/>

            </Switch>           
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch)),
        register: (user_name, password, email, category, skills, description) => dispatch(register(user_name, password, email, category, skills, description, dispatch))
    }
}



export default connect(undefined, mapDispatchToProps)(SecurityContainer);