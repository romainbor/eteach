const reducer = function( state = {
    isLogged : false,
    user:null
}, action){
    switch(action.type){
        
        case 'LOGIN':
            localStorage.setItem('tokenJWT',action.payload.token)
            localStorage.setItem('user_id',action.payload.user._id)
            localStorage.setItem('user_name',action.payload.user.user_name)  
            localStorage.setItem('category',action.payload.user.category)
            localStorage.setItem('skills',action.payload.user.skills) 
            localStorage.setItem('description',action.payload.user.description)       
                return Object.assign({}, state, {
                isLogged: true,
                user: action.payload
            });
            
        case 'LOGOUT':
            return Object.assign({},state, {
                isLogged: false,
                user:null
            });
        default:
            return state;            
    }    
}

export default reducer;