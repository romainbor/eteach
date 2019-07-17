import React from 'react';

import{Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import ListProfil from './User';
import ProfilPageInfo from '../views/ProfilePage/ProfilePageInfo'


class UserContainer extends React.Component{

    render(){
        return(           
            <Switch>
                <Route path="/user/list" render={() => <ListProfil/>}/>
                <Route path="/user/:username" render={() => <ProfilPageInfo/>}/>
            </Switch>           
        );
    }
}


export default connect(undefined)(UserContainer);