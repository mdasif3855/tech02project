import { BrowserRouter, Routes,Route,Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Editpost from "./Components/Editpost";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {UseAuthcontext} from'../src/Hooks/UseAuthcontext'
function App() {
  const {user} = UseAuthcontext()
  return (
  
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
            <Route path="/" element={user ? <Home/>: <Navigate to='/login'/>}/>
      
        <Route path="/Editpost" element={<Editpost/>}/>
        <Route path="/login" element={!user ? <Login/>:<Navigate to='/'/>}/>
        <Route path="/signup" element={!user ? <Signup/>:<Navigate to='/'/>}>
      </Route>
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
