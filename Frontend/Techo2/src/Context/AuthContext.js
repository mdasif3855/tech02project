import { createContext,useEffect,useReducer } from "react";
export const authreducer =(state,action)=>{
switch (action.type) {
    case 'LOGIN':
        
    return {user : action.payload}

    case 'LOGOUT':
        return {user:null}

    default:
      return state
}
}
export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
const [state,dispatch] = useReducer(authreducer,{user:null})
useEffect (()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user){
        dispatch({type :'LOGIN', payload : user})
    }
},[] )

return(
 <AuthContext.Provider value={{...state,dispatch}}>
    {children}
 </AuthContext.Provider>

)
}