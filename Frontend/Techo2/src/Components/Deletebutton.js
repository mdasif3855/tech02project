import { UseBlogcontex } from "../Hooks/UseBlogcontex"
import {UseAuthcontext} from'../Hooks/UseAuthcontext'
const Deletebutton =  ({id,children}) => {
    const{dispatch} = UseBlogcontex()
    const {user} = UseAuthcontext()
        const handleclick = async()=>{
          if(!user){
            return
          }
            const res = await fetch(`/api/blog/${id}`, {
              method : 'DELETE',headers :{
                'Authorization': `Bearer ${user.token}`
              }
            })
            const json = await res.json()
            if(res.ok){
              dispatch({type : 'DELETE_BLOG', payload : json})
            }
        
          }
  
    return (
        <button onClick={handleclick}>
        {children}
      </button>
    )
  }
  
  export default Deletebutton
