import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import CommentBox from "../../container/CommentBox"

import {Link, Redirect } from 'react-router-dom';

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  
  data = [];
  user = '';
  category = '';
  skills = [];
  description = '';
  id_profile = ''

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  category_profil = localStorage.getItem('category');

        
    render() {
      
      this.user = localStorage.getItem("user_name");
      this.category = localStorage.getItem("category");
      this.skills = localStorage.getItem("skills");
      this.description = localStorage.getItem("description");
      this.id_profile = localStorage.getItem("user_id");

      if(this.category_profil == "teacher"){
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
          classes.imgRaised,
          classes.imgRoundedCircle,
          classes.imgFluid
        );
        
        

        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
              <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
              <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                          <div>
                            <img src={profile} alt="..." className={imageClasses} />
                          </div>
                          <div className={classes.name}>
                            <h3 className={classes.title}>{this.user}</h3>
                          </div><br />
                          <div className={classes.name}>
                          <h3 className={classes.title}>{this.category} </h3>
                              <h6>Matière(s) enseignée(s)</h6>
                            <h6>{this.skills}</h6>
                          </div>
                        </div>
                      </GridItem>
                    </GridContainer>
                    <NavPills
                      color="warning"
                      tabs={[
                        {
                          tabButton: "Profile",
                          tabContent: (
                            <span>
                              <p>
                                  {this.description}
                              </p>
                              <br />
                              <p>
                                  Les matières que j'enseigne sont : {this.skills}
                              </p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Passe-temps",
                          tabContent: (
                            <span>
                              <p>
                                Mon passe-temps favori est la création de bijoux.
                              </p>
                              <br />
                              <p>
                                Mon deuxième passe-temps favori est la natation.
                              </p>
                            </span>
                          )
                        }
                      ]}
                      
                    />
                  <Link to={"/annonce/create"} className={classes.link}>
                    <Button color="primary" size="lg" simple>
                      Créer une annonce
                    </Button>
                  </Link>


                  </div>
                </div>
              </div>
              <CommentBox profile_name={this.id_profile} />
              <Footer />
            </div>
          }
          {
          !localStorage.tokenJWT && <Redirect to={{ pathname: 'security/login'}} /> 
          } 
          </div>
        );
      }
    else{
      const { classes, ...rest } = this.props;
        const imageClasses = classNames(
          classes.imgRaised,
          classes.imgRoundedCircle,
          classes.imgFluid
        );

        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
              <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
              <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                          <div>
                            <img src={profile} alt="..." className={imageClasses} />
                          </div>
                          <div className={classes.name}>
                            <h3 className={classes.title}>{this.user}</h3>
                          </div><br />
                          <div className={classes.name}>
                          <h3 className={classes.title}>{this.category} </h3>
                              <h6>Matière(s) souhaitée(s)</h6>
                            <h6>{this.skills}</h6>
                          </div>
                        </div>
                      </GridItem>
                    </GridContainer>
                    <NavPills
                      color="warning"
                      tabs={[
                        {
                          tabButton: "Profile",
                          tabContent: (
                            <span>
                              <p>
                                  {this.description}
                              </p>
                              <br />
                              <p>
                                  Les matières que je souhaite perfectionner sont : {this.skills}
                              </p>
                              <br />
                            </span>
                          )
                        },
                        ,
                        {
                          tabButton: "Passe-temps",
                          tabContent: (
                            <span>
                              <p>
                                Mon passe-temps favori est la création de bijoux.
                              </p>
                              <br />
                              <p>
                                Mon deuxième passe-temps favori est la natation.
                              </p>
                            </span>
                          )
                        }
                      ]}
                    />
                    


                  </div>
                </div>
              </div>
              <CommentBox />
            <Footer />
          </div>
          }
         
          {
          !localStorage.tokenJWT && <Redirect to={{ pathname: 'security/login'}} /> 
          } 
          </div>
           
      );
      
    }
    
  };   
}

export default withStyles(profilePageStyle)(ProfilePage);
