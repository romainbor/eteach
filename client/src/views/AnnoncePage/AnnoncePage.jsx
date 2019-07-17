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

import {Link} from 'react-router-dom';

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
  
  category_profil = localStorage.getItem('category');
  
    render() {
      if(category_profil == "teacher"){
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
          classes.imgRaised,
          classes.imgRoundedCircle,
          classes.imgFluid
        );
        
        const user = localStorage.getItem("user_name");
        const category = localStorage.getItem("category");
        const skills = localStorage.getItem("skills");
        const test = localStorage.getItem("description");

        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
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
                          <h3 className={classes.title}>{user}</h3>
                        </div><br />
                        <div className={classes.name}>
                        <h3 className={classes.title}>{category} </h3>
                            <h6>Matière(s) enseignée(s)</h6>
                          <h6>{skills}</h6>
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
                                {test}
                            </p>
                            <br />
                            <p>
                                Les matières que j'enseigne sont : {skills}
                            </p>
                            <br />
                            <p>
                                Les matières que j'enseigne sont : {skills}
                            </p>
                            <br />
                            <p>
                                Les matières que j'enseigne sont : {skills}
                            </p>
                            <br />
                            <p>
                                Les matières que j'enseigne sont : {skills}
                            </p>
                          </span>
                        )
                      },
                      {
                        tabButton: "Annonce",
                        tabContent: (
                          <span>
                            <p>
                              Efficiently unleash cross-media information without
                              cross-media value. Quickly maximize timely
                              deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions.
                            </p>
                          </span>
                        )
                      },
                    ]}
                  />
                  


                </div>
              </div>
            </div>
            <Footer />
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
        
        const user = localStorage.getItem("user_name");
        const category = localStorage.getItem("category");
        const skills = localStorage.getItem("skills");
        const test = localStorage.getItem("description");

        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
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
                          <h3 className={classes.title}>{user}</h3>
                        </div><br />
                        <div className={classes.name}>
                        <h3 className={classes.title}>{category} </h3>
                            <h6>Matière(s) souhaitée(s)</h6>
                          <h6>{skills}</h6>
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
                                {test}
                            </p>
                            <br />
                            <p>
                                Les matières que je souhaite perfectionner sont : {skills}
                            </p>
                            <br />
                          </span>
                        )
                      },
                    ]}
                  />
                  


                </div>
              </div>
            </div>
          <Footer />
        </div>
      );
    }
  };   
}

export default withStyles(profilePageStyle)(ProfilePage);
