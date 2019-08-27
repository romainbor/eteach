export const add_annonce = (user, tarif, description, skill, niveau, departement, email, dispatch) => {
    const data = {user, tarif, description, skill, niveau, departement, email};
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch ('https://teachonline.herokuapp.com/annonce/create',
        {
            method:'POST',
            mode: "cors",
            headers : myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => (error));
        
        return{
            type: "ADD_ANNONCE",
            payload: {}
        }
};

