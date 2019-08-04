import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import { BrowserRouter,Link } from "react-router-dom";


import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import {Redirect } from 'react-router-dom';

class ListProfil extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: undefined,
          isLoaded: false,
          users: [],
        };
    
       this.getData = this.getData.bind(this);
      }
      componentDidMount() {
        this.getData();
      }
    getData() {
         
        const URL='https://teachonline.herokuapp.com:3001/user';
        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        return fetch (URL,
            {
                method:'GET',
                mode: "cors",
                headers : myHeaders
            })
            .then(response => response.json())
            .then( data => { 
                    this.setState({users: data});
                })
            .catch(error => (error));

    }
    

    render() {
        const { users } = this.state;
        const user_name = localStorage.getItem("user_name");
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
          );
        return (
        <div>
        { localStorage.tokenJWT &&
            <div>
                <Header
                    color="transparent"
                    brand="e-teach"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Votre réussite débute avec nous.</h1>
                            <h4>
                            E-teach est une plateforme pour les professeurs souhaitant donner des cours particuliers,
                            ainsi que pour les élèves souhaitant obtenir ces cours
                            </h4>
                            <br />
                        </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.section}>
                    <GridContainer justify="center">
                            
                            {this.state.users.map(function(item, key) {
                            return (
                            <GridItem xs={3}>                                
                            <div style= {{width: "100%", display: "inline"}}>                     
                                <div key = {key} style={{width: "30rem", display: "inline"}}>                                    
                                    <Card style={{width: "20rem"}}>
                                        <img
                                        style={{height: "180px", width: "100%", display: "inline"}}
                                        className={classes.imgCardTop}
                                        src={`https://picsum.photos/70?random=${item.user_name}`}
                                        alt="Card-img-cap"
                                    />
                                    <CardBody>
                                    <h4 className={classes.cardTitle}>{item.user_name}</h4>
                                    <p>{item.description}</p>
                                        <Link to={`/user/${item.user_name}`}>
                                            <Button color="primary">
                                                Go to profile
                                            </Button>
                                        </Link>
                                    </CardBody>
                                    </Card>
                                </div>
                            </div>  
                            </GridItem>
                            )
                            })}  
                                
                        </GridContainer>
                    </div>
                </div>
            <Footer />             
            </div>
        }
        {
          !localStorage.tokenJWT && <Redirect to={{ pathname: 'security/login'}} /> 
        }
        </div> 
        )
    }
}
export default withStyles(landingPageStyle)(ListProfil);
