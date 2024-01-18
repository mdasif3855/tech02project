import {AuthContext} from "../Context/AuthContext"
import { useContext } from "react"

export const UseAuthcontext = () => {
const Context = useContext(AuthContext)
if(!Context){
    throw Error('use Authcontext should inside the Authcontextprovider')
}
    return Context
}
