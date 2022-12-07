import Header from "../../components/reusables/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
import '../../css/pages/SignUp.css'

const SignUp = () => {

    const navigator = useNavigate()
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)

    }

    const submitHandler = () => {
        if (user.fullName != '' && user.email != '' && user.password != '') {
            axios.post('http://localhost:8080/signUp', user)
                .then((response) => {
                    console.log(response.data)
                    navigator('/Login')
                }).catch((e) => {
                    console.log(e)
                })
        } else {

        }
    }

    const home = () => {
        navigator('/')
    }

return (
    <div className="flex-col container">
        <Header headerText="Sign up" user={user} />
        <div className="center flex-col">
            <div className="sign-up-form flex-col center full-width">
                <label>FullName</label>
                <input placeholder="TYPE HERE" type='text' name="fullName" value={user.fullName} onChange={changeHandler} />
                <label>Email</label>
                <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                <label>Password</label>
                <input placeholder="TYPE HERE" type='password' name="password" value={user.password} onChange={changeHandler} />
                <div className="flex-row third-width">
                    <div className="half-width center">
                    <button className="button center" value='Legs' onClick={home}>Home</button>
                    </div>
                    <div className="half-width center">
                    <button class="button" onClick={submitHandler}>SUBMIT</button>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
)







}


export default SignUp;