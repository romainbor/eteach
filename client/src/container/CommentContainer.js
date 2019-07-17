import React from 'react';

import{Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';


class CommentContainer extends React.Component{

    handleSubmit = (data) => {
        this.props.add_annonce(data.user, data.tarif,data.description, data.selectedOption.label, this.props.dispatch);        
    }
     
    render(){
        return(           
            <Switch>
                <Route path="/comment" render={() => <CommentBox/>}/>
            </Switch>           
        );
    }
}



export default connect(undefined)(CommentContainer);