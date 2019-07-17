import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};

    
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
        username:"",
        password: ""
  }


  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }



  handleKeyUp = (event,field) => {
    const input = event.currentTarget;
    this.setState({
        [field] : input.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
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
                    <p className={classes.divider}>Connexion</p>
                    <CardBody>
                      <CustomInput
                        labelText="username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                          value:this.state.value,
                          onChange:this.handleChangeUsername,
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
                      <CustomInput
                        labelText="password"
                        id="password"
                        formControlProps={{
                          fullWidth: true,
                          value: this.state.value,
                          onChange: this.handleChangePassword
                        }}
                        inputProps={{
                          type: "password",
                          
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
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

export default withStyles(loginPageStyle)(LoginPage);
