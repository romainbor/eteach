export const skill = (user_name, skills, dispatch) => {
    const data = {
        user_name, 
        skills
    };
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch ('https://teachonline.herokuapp.com/skills',
        {
            method:'GET',
            mode: "cors",
            headers : myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => (error));
   
        //appeler login ?
        
   
        return{
            type: "REQUEST_SKILLS",
            payload: {}
        }
   }; 