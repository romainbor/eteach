import React from 'react';
import Select from 'react-select';

export default class AnnonceForm extends React.Component{
    skill = [];
    constructor() {
        super();
        const URL='https://teachonline.herokuapp.com/skills?username=';
        let skill = new Array();
        // ...
        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
            fetch (URL + localStorage.getItem('user_name'),
            {
                method:'GET',
                mode: "cors",
                headers : myHeaders
            })
            .then(response => response.json())
            .then(data => {
                data.user_skill.map(x => {
                    this.skill.push({label: x, value: x});
                });
            })
            .catch(error => (error));
    }
    state = {
        tarif:"",
        description:"",
        user: localStorage.getItem('user_id'),
        selectedOption: null,
    }
 

    handleChange = selectedOption => {
        this.setState({ selectedOption });
      };
    
    handleKeyUp = (event,field) => {
        const input = event.currentTarget;
        	this.setState({
	            [field] : input.value
	        });
        //}

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

     
    render(){
        const { selectedOption } = this.state;
        return(
           
          <form onSubmit={this.handleSubmit}>
                <label>Tarif</label>
                <input onKeyUp={(event) => this.handleKeyUp(event,'tarif')}/>
                <label>Description</label>
                <input type="textarea" cols={40} rows={10} onKeyUp={(event) => this.handleKeyUp(event,'description')}/>
                <div className="container">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.skill}
                    />
                </div>        
                <button type="submit" >Submit</button>             
          </form>        
        );
    }
}