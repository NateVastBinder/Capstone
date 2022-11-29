import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login'
import UserPortal from './components/pages/UserPortal'
import UserAccount from './components/pages/UserAccount'
import PageWrapper from './components/reusables/PageWrapper'; 
// import  { getUserByEmail } from './makeRequests'

function App() {


  const [user, setUser] = useState({})

  
  useEffect(() => {
    if (localStorage.getItem("email")) {
        axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}, [])

  return (
    // <PageWrapper u ser={user} setUser={setUser}>
 <Routes>
    <Route exact path='/' element = {<Home />} />
    <Route path = '/SignUp' element = {<SignUp />} />
    <Route path = '/Login' element = {<Login />} />
    <Route path = '/UserPortal' element = {<UserPortal/>} />
    <Route path = '/UserAccount' element = {<UserAccount/>} />
 </Routes>
  //  </PageWrapper>
  );
}

export default App;
