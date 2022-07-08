export default(state,action)=>{
    switch(action,type){
        case 'EDIT_USER':
            const updatedUser=action.payload
            const updatedUsers=state.users.map(user=>{
                if(user.id=== updatedUser.id){
                    return updatedUser;
                }
                return user;
            })
            return{
                users:updatedUsers
            }
default: return state
        
    }
}