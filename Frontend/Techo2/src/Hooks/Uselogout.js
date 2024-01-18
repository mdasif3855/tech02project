import { UseAuthcontext } from "./UseAuthcontext"
import { UseBlogcontex } from "./UseBlogcontex"
export const Uselogout =()=>{
    const {dispatch} = UseAuthcontext()
    const {dispatch :blogdispatch} = UseAuthcontext()
    const logout =()=>{
        //remove the user from the storage
        localStorage.removeItem('user')
        dispatch({type:"LOGOUT"})
        blogdispatch({type : "SET_BLOG",payload : null})
    }
    return {logout}
}