import { createContext, useReducer } from "react";
export const Blogcontext = createContext()

export const BlogReducer =(state,action)=>{
switch (action.type) {
    case 'SET_BLOGS':
        return{
            Blogs : action.payload
        }
        case 'CREATE_BLOG':
            return{
                Blogs : [action.payload,...state.Blogs]
            }
            case 'DELETE_BLOG':
                return{
                    Blogs :state.Blogs.filter( (w)=>w._id !== action.payload._id)
                }

    default:
        return state
}
}
export const BlogsContextProvider =({children})=>{
    const [state,dispatch] = useReducer(BlogReducer, {Blogs:null})
   
    return(
        <Blogcontext.Provider value={{...state,dispatch}}>
            {children}
        </Blogcontext.Provider>
    )
} 