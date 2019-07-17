import React from 'react';

import{Switch, Route} from 'react-router-dom';
import AnnonceForm from './AnnonceForm.js';
import { connect } from 'react-redux';
import { add_annonce } from '../redux/actions/annonce';
import ListAnnonce from './Annonce';


class AnnonceContainer extends React.Component{

    handleSubmit = (data) => {
        const { history } = this.props;
        this.props.add_annonce(data.user, data.tarif,data.description, data.selectedOption.label,data.niveau, data.departement, data.email, this.props.dispatch);    
        history.push('/profile-page');    
    }
     
    render(){
        return(           
            <Switch>
                <Route path="/annonce/list" render={() => <ListAnnonce/>}/>
                <Route path="/annonce/create" render={() => <AnnonceForm onSubmit={this.handleSubmit}/>}/>
            </Switch>           
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_annonce: (user, tarif, description, skill, niveau, departement, email) => dispatch(add_annonce(user, tarif, description, skill, niveau, departement, email, dispatch))
    }
}



export default connect(undefined, mapDispatchToProps)(AnnonceContainer);