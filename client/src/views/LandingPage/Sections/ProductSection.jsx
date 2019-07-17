import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Parlons du produit plus en détails</h2>
            <h5 className={classes.description}>
              E-teach permet pour des étudiants de rechercher des cours particuliers. Le choix est donné aux professeurs
              de pouvoir dispenser ses cours par internet(à distance ou via du e-learning) ou en face à face. L'étudiant
              lui pourra à l'aide de recherche renseigner les niveaux qu'ils recherchent.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Profile simple à créer"
                description="Création rapide du profil. Fini les 10 pages demandant toutes sortes d'informations."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Commentaires"
                description="Le système de commentaires se fait par le retours des étudiants et des professeurs. Il a pour but d'établir un retour sur leurs expériences communes"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
