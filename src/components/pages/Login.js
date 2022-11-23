import Header from "../../components/reusables/Header";
import {useState} from "react"
import { useNavigate } from "react-router";
import axios from 'axios'
import {getUserByEmail} from '../makeRequests'

const SignIn = () => {

    const navigator = useNavigate()
    const [user, setUser] = useState ({
        email:'',
        password:''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = {...user}
        tempUser[name] = value
        setUser(tempUser)
    }


    const submitHander = () => {
        axios.post(`http://localhost:8080/signIn`, user)
        .then((response) => {
            localStorage.setItem("email", response.data.email)
            navigator('/')
        }) .catch((e) => {
            console.log(e.response.data.message)
        })
    }


    

    return (
        <div className='flex-col container'>
            <Header headerText="Log in page" user={user}/>

            <div className="flex-col full-width center border">
                <label>Email</label>
                <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                <label>Password</label>
                <input placeholder = "TYPE HERE" type='password' name="password" value={user.password} onChange={changeHandler} />
                <button class = "submitButton"onClick={submitHander}>SUBMIT</button>
                <a href="/" class="homeButton">Home</a>

            </div>
        </div>


    )
}



export default SignIn;