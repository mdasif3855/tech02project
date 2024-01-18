import { Blogcontext } from "../Context/Blogcontext";
import { useContext } from "react";
import React from 'react'

export const UseBlogcontex = () => {
const context = useContext(Blogcontext)
if (!context){
    throw Error ("use context inside the context provider")
}
return context

}
