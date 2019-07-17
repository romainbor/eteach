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
import Radio from "@material-ui/core/Radio";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CheckBox from '../components/checkBox.jsx';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class RegisterForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {user_name: ''};
    this.state = {password: ''};
    this.state = {description: ''};
    this.state = {category: ''};
    this.state = {email: ''};
    this.state = {
        newUser: {
          category: '',
          skills: [],
        },
        

        skillOptions: ["Français", "Mathématiques", "Anglais", "Sciences"]
    };

    this.handleChangeUser_name = this.handleChangeUser_name.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
        user_name:"",
        password: ""
  }


  handleChangeUser_name(event) {
    this.setState({user_name: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeEnabled(event) {
    this.setState({
      category: event.target.value
    });
  }



  handleKeyUp = (event,field) => {
    const input = event.currentTarget;
    this.setState({
        [field] : input.value
    });
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
                    <p className={classes.divider}>Enregistrement</p>
                    <CardBody>
                      <CustomInput
                        labelText="user_name"
                        id="user_name"
                        formControlProps={{
                          fullWidth: true,
                          value:this.state.value,
                          onChange:this.handleChangeUser_name,
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
                        <CustomInput
                            labelText="description"
                            id="description"
                            formControlProps={{
                                fullWidth: true,
                                value: this.state.value,
                                onChange: this.handleChangeDescription
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
                            labelText="email"
                            id="email"
                            formControlProps={{
                                fullWidth: true,
                                value: this.state.value,
                                onChange: this.handleChangeEmail
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
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                        <FormControlLabel
                            control={
                                <CheckBox
                                    title={"Skills"}
                                    name={"skills"}
                                    options={this.state.skillOptions}
                                    selectedOptions={this.state.newUser.skills}
                                    handleChange={this.handleCheckBox}
                                />
                            }
                            classes={{ label: classes.label }}
                        />
                        </div>
                        <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.category === "teacher"}
                        onChange={this.handleChangeEnabled}
                        value="teacher"
                        name="teacher"
                        aria-label="teacher"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label="teacher"
                  />
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.category === "student"}
                        onChange={this.handleChangeEnabled}
                        value="student"
                        name="student"
                        aria-label="student"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label="student"
                  />
                </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        Enregistrement
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

export default withStyles(loginPageStyle)(RegisterForm);
