import Header from "../../components/reusables/Header";
import {useState} from "react"
import { useNavigate } from "react-router";
import axios from 'axios'
// import {getUserByEmail} from '../../makeRequests'

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
            navigator('/UserPortal')
        }) .catch((e) => {
            console.log(e.response.data.message)
        })
    }

    const home = () => {
        navigator('/')
    }
    

    return (
        <div className='flex-col container'>
            <Header headerText="Log in page" user={user}/>

            <div className="flex-col full-width center border sign-up-form">
                <label>Email</label>
                <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                <label>Password</label>
                <input placeholder = "TYPE HERE" type='password' name="password" value={user.password} onChange={changeHandler} />
                <div className="flex-row third-width">
                    <div className="half-width center">
                    <button className="button center" value='Legs' onClick={home}>Home</button>
                    </div>
                    <div className="half-width center">
                    <button class = "button"onClick={submitHander}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>


    )
}



export default SignIn;