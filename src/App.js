import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./responsive.css";
import { useEffect } from "react";
import { auth } from "./pages/SignIn/components/firebase";
import {useDispatch,useSelector} from 'react-redux'
import {login,logout,selectUser} from "./features/userSlice"
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
          }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <>
      <Router>
      {!user?(
         <SignIn />
      ):(
         <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
         
         </Routes>
      )}
      </Router>
    </>
  );
}

export default App;
