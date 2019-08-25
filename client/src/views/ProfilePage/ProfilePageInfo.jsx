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

import {Link, Redirect, NavLink } from 'react-router-dom';

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

class ProfilePageInfo extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      data_profil: [],   
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
  
  const data_username = this.props.match.url
  const URL=`https://teachonline.herokuapp.com` + data_username;
  let skill = new Array();
  // ...
  let myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");
  myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
      fetch (URL,
      {
          method:'GET',
          mode: "cors",
          headers : myHeaders
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ data_profil : data })

      })
      .catch(error =>(error));
  }
  category_profil = localStorage.getItem('category');

        
    render() {
      console.log(localStorage.getItem('tokenJWT'));
      const { params } = this.props.match
      console.log(this.props.match.url)
      const { data_profil } = this.state;
      console.log( {data_profil });
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
                            <h3 className={classes.title}>{data_profil.user_name}</h3>
                          </div><br />
                          <div className={classes.name}>
                          <h3 className={classes.title}>{data_profil.category} </h3>
                              <h6>Matière(s) enseignée(s)</h6>
                              <p>{params.id}</p>
                            <h6>{data_profil.skills}</h6>
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
                                  {data_profil.description}
                              </p>
                              <br />
                              <p>
                                  Les matières que j'enseigne sont : {data_profil.skills}
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
              <CommentBox profile_name={data_profil._id} />
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
                            <h3 className={classes.title}>{data_profil.user}</h3>
                          </div><br />
                          <div className={classes.name}>
                          <h3 className={classes.title}>{data_profil.category} </h3>
                              <h6>Matière(s) souhaitée(s)</h6>
                            <h6>{data_profil.skills}</h6>
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
                                  {data_profil.description}
                              </p>
                              <br />
                              <p>
                                  Les matières que je souhaite perfectionner sont : {data_profil.skills}
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

export default withStyles(profilePageStyle)(ProfilePageInfo);
