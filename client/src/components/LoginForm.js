import React, { Component } from 'react';
import { VERIFY_USER } from '../Events';
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Radio from "@material-ui/core/Radio";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CheckBox from '../components/checkBox.jsx';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";


import image from "assets/img/bg7.jpg";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        nickname:"",
        error:""
      };
    }

    setUser = ({user, isUser})=>{

        if(isUser){
            this.setError("User name taken")
        }else{
            this.setError("")
            this.props.setUser(user)
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const { socket } = this.props
        const { nickname } = this.state
        socket.emit(VERIFY_USER, nickname, this.setUser)
    }

    handleChangeNickname = (e)=>{   
        this.setState({nickname:e.target.value})
    }

    setError = (error)=>{
        this.setState({error})
    }
	render() {
		const { classes, ...rest } = this.props;
	
		
	
		return (
			<div>
				<Header
				absolute
				color="transparent"
				brand="e-teach"
				rightLinks={<HeaderLinks />}
				{...rest}
				/>
				<div
				className={classes.pageHeader}
				style={{
					backgroundImage: "url(" + image + ")",
					backgroundSize: "cover",
					backgroundPosition: "top center"
				}}
				>
				
			<div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[this.state.cardAnimaton]}>
                      <form onSubmit={this.handleSubmit} className={classes.form}>
                        <p className={classes.divider}>Connexion au chat.</p>
						<p className={classes.divider}>Utilisez le même pseudo que votre nom d'utilisateur.</p>
						<p className={classes.divider}>Cliquez sur la flèche en bas à gauche pour vous déconnecter.</p>
                        <CardBody>
                          <CustomInput
                            labelText="nickname"
                            id="nickname"
                            formControlProps={{
                              fullWidth: true,
                              value:this.state.value,
                              onChange:this.handleChangeNickname,
                            }}
                            inputProps={{
                              type: "text",
                               
                              endAdornment: (
                                <InputAdornment position="end">
                                  
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button type="submit" simple color="primary" size="lg">
                            Connexion
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
				</div>
				<Footer whiteFont />
              </div>
			</div>

		);
	  }
	}
export default withStyles(loginPageStyle)(LoginForm);