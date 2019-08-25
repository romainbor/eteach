import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {

  constructor(props) {
    super(props);

  this.state = {name: ''};
  this.state = {email: ''};
  this.state = {message: ''};

  this.handleChangeName = this.handleChangeName.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangeMessage = this.handleChangeMessage.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }
  

  handleSubmit(e){
    e.preventDefault();
    const { name, email, message } = this.state;
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    fetch('https://teachonline.herokuapp.com/mail/send', {
      method: 'POST',
      mode: "cors",
      headers: myHeaders,
      body: JSON.stringify({ name ,email, message }),
    })
    .then(response => response.json())
    .catch(error => (error));
}
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Faites-nous part de vos commentaires</h2>
            <h4 className={classes.description}>
              N'hésitez pas à faire part de vos commentaires. Si vous souhaitez des nouveautés, des améliorations
              ou simplement donner votre avis sur l'application
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nom"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      value:this.state.value,
                      onChange:this.handleChangeName,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      value:this.state.value,
                      onChange:this.handleChangeEmail,
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    value:this.state.value,
                    onChange:this.handleChangeMessage,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                  <Button onClick={this.handleSubmit} color="primary">Envoyer le message</Button>
                    </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
