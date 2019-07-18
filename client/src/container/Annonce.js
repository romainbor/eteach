import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import MUIDataTable from "mui-datatables";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import {Redirect } from 'react-router-dom';

  
class ListAnnonce extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: undefined,
          isLoaded: false,
          annonces: [],
        };
    
       this.getData = this.getData.bind(this);
      }
      componentDidMount() {
        this.getData();
      }
    getData() {
         
        const URL='https://teachonline.herokuapp.com/annonce';
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
                    this.setState({annonces: data});
                })
            .catch(error => (error));

    }
    

    render() {
        const { annonces } = this.state;
        const columns = [
            {
             name: "skill",
             label: "skill",
             options: {
              filter: true,
              sort: true
             }
            },
            {
             name: "description",
             label: "description",
             options: {
              filter: true,
              sort: false
             }
            },
            {
             name: "tarif",
             label: "tarif",
             options: {
              filter: true,
              sort: true
             }
            },
            {
             name: "niveau",
             label: "niveau",
             options: {
              filter: true,
              sort: false
             }
            },
            {
              name: "departement",
              label: "departement",
              options: {
               filter: true,
               sort: false
              }
             }
             ,
            {
              name: "email",
              label: "email",
              options: {
               filter: true,
               sort: false
              }
             }
           ];
           
           const options = {
            filterType: "dropdown",
            responsive: "scroll"
          };
           
           
        
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
                    <h1 color="white" className={classes.title}>Votre réussite débute avec nous.</h1>
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
                          <GridItem xs={12} sm={12} md={8}>
                              <h2 className={classes.title}>Annonce list</h2>
                              <MUIDataTable
                                  title={"Announce List"}
                                  data={ annonces }
                                  columns={columns}
                                  options={options}
                              />
                          </GridItem>
                      </GridContainer>
                  </div>
              </div>
            <Footer />        
          </div>
          }
        {
          !localStorage.tokenJWT && <Redirect to="/security/login" /> 
        }
        </div> 
        )
    }
}
export default withStyles(profilePageStyle)(ListAnnonce);
