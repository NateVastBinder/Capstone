import Header from "../../components/reusables/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'

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
                    <input placeholder = "TYPE HERE" type='password' name="password" value={user.password} onChange={changeHandler} />
                    <button class = "submitButton"onClick={submitHandler}>SUBMIT</button>
                    <a href="/" class="homeButton">Home</a>

                </div>
            </div>
        </div>
    )







}


export default SignUp;