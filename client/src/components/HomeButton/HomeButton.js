import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function deconnexion(){
  localStorage.clear();
  const { history } = this.props;
  history.push('/login');

}
function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" component={Link} to="/security/login"  className={classes.button}>
        Login
      </Button>

      { localStorage.tokenJWT && <React.Fragment>

      <Button variant="contained" className={classes.button} onClick={deconnexion}>
        Deconnexion
      </Button>
      </React.Fragment>}
      {
      !localStorage.tokenJWT && "not connected"
      } 
    
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);