/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function deconnexion(){
  localStorage.clear();
  const { history } = this.props;
  history.push('/login');
}



function HeaderLinks({ ...props }) {
  const { classes } = props;
    return (
      <div>
      { localStorage.tokenJWT &&
      
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Menu"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/landing-page" className={classes.dropdownLink}>
                Front page
              </Link>,
              <Link to="/profile-page" className={classes.dropdownLink}>
                Profile page
              </Link>,
              <Link to="/annonce/list" className={classes.dropdownLink}>
                Annonces
              </Link>,
              <Link to="/user/list" className={classes.dropdownLink}>
                Utilisateurs
              </Link>,
              <Link to="/chat" className={classes.dropdownLink}>
                Chat
              </Link>,
              <Link to="/security/login" className={classes.dropdownLink} onClick={deconnexion}>
                Deconnexion
              </Link>
            ]}
          />
        </ListItem>
      </List>
      }
      {
        !localStorage.tokenJWT && 
        <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Menu"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/landing-page" className={classes.dropdownLink}>
                Page d'acceuil
              </Link>,
              <Link to="/security/login" className={classes.dropdownLink}>
                Connexion
              </Link>,
              <Link to="/security/register" className={classes.dropdownLink}>
                Enregistrement
              </Link>
            ]}
          />
        </ListItem>
      </List>
      }
      </div>
    );
}


export default withStyles(headerLinksStyle)(HeaderLinks);
