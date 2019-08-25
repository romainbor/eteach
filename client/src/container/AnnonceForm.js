import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Radio from "@material-ui/core/Radio";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import Select from 'react-select';
import {Redirect } from 'react-router-dom';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class RegisterForm extends React.Component{
    skill = [];
  constructor(props) {
    super(props);

    const URL='/skills?username=';
        let skill = new Array();
        // ...
        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
            fetch (URL + localStorage.getItem('user_name'),
            {
                method:'GET',
                mode: "cors",
                headers : myHeaders
            })
            .then(response => response.json())
            .then(data => {
                data.user_skill.map(x => {
                    this.skill.push({label: x, value: x});
                });
            })
            .catch(error => (error));

    this.state = {tarif: ''};
    this.state = {skill: ''};
    this.state = {description: ''};
    this.state = {departement: ''};
    this.state = {niveau: ''};
    this.state = {email: ''};
    this.state = {user: localStorage.getItem("user_id")};


    this.handleChangeTarif = this.handleChangeTarif.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeDepartement = this.handleChangeDepartement.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
        tarif:"",
        description: "",
        selectedOption: null,
  }


  handleChangeTarif(event) {
    this.setState({tarif: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  handleChangeDepartement(event) {
    this.setState({departement: event.target.value});
  }
  handleChangeSkill(event) {
    this.setState({skill: event.target.value});
  }

  handleChangeSelect = selectedOption => {
    this.setState({ selectedOption });
  };
  handleChangeEnabled(event) {
    this.setState({
      niveau: event.target.value
    });
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

    const { selectedOption } = this.state;

    return (
    <div>
      { localStorage.tokenJWT &&
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
                      <p className={classes.divider}>Création d'une annonce</p>
                      <CardBody>
                        <CustomInput
                          labelText="tarif"
                          id="tarif"
                          formControlProps={{
                            fullWidth: true,
                            value:this.state.value,
                            onChange:this.handleChangeTarif,
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
                            value:this.state.value,
                            onChange:this.handleChangeEmail,
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
                            labelText="description"
                            id="description"
                            formControlProps={{
                                fullWidth: true,
                                value: this.state.value,
                                onChange: this.handleChangeDescription
                            }}
                            inputProps={{
                                type: "text",
                                className: classes.textArea,
                          
                                endAdornment: (
                                  <InputAdornment position="end">
                                    
                                    <People className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )
                            }}
                        />
                        <CustomInput
                          labelText="departement"
                          id="departement"
                          formControlProps={{
                            fullWidth: true,
                            value:this.state.value,
                            onChange:this.handleChangeDepartement,
                          }}
                          inputProps={{
                            type: "text",
                            max: "2",
                            
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
                      <Radio
                        checked={this.state.niveau === "college"}
                        onChange={this.handleChangeEnabled}
                        value="college"
                        name="college"
                        aria-label="college"
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
                    label="college"
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
                        checked={this.state.niveau === "elementaire"}
                        onChange={this.handleChangeEnabled}
                        value="elementaire"
                        name="elementaire"
                        aria-label="elementaire"
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
                    label="elementaire"
                  />
                </div>
                          <Select
                          value={selectedOption}
                          onChange={this.handleChangeSelect}
                          options={this.skill}
                          />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button type="submit" simple color="primary" size="lg">
                          Créer votre annonce
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            </div>
            <Footer whiteFont />
          </div>
        }
      {
        !localStorage.tokenJWT && <Redirect to="/security/login" /> 
      }
      </div> 
      );
  }
}

export default withStyles(loginPageStyle)(RegisterForm);
