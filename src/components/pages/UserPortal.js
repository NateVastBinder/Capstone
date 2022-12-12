import Header from "../../components/reusables/Header";
import '../../css/pages/CreateWorkout.css'
import '../../css/pages/UserPortal.css'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router'
import axios from "axios"
import CreateWorkout from './CreateWorkout'
import UserAccount from './UserAccount'
import UserHome from './UserHome'


const UserPortal = (props) => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState('Home')
    const navigator = useNavigate()

    const clickHandler = () => {
        props.setUser({})
        localStorage.removeItem('email')
        navigator('/')
    }
    console.log("rerendah")

    useEffect(() => {
        if (localStorage.getItem("email")) {
            axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
                .then((response) => {
                    setUser(response.data)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }, [form])
    const handleView = (event) => {

        setForm(event.target.value)
    }

    const renderForm = () => {
        switch (form) {
            case 'create-workout':
                return (
                    <CreateWorkout user={user} setUser={setUser} />
                )
                break;
        
            case 'account':
                return (
                    <UserAccount user={user} setUser={setUser} />

                )
                break;

            case 'Home':
                if (user.id === undefined ) {
                    return null
                }else {
                return (
                    <UserHome user={user} setUser={setUser} />

                )
                break;
                }
        }

    }
    






    return (
        <div className="flex-col container">
            <div className="flex-row full-height background">
                <div className="flex-col margin-bottom side-bar-width full-height full-width ">
                        <button className="button" value='create-workout' onClick={handleView}>Create Workout</button>
                        <button className="button" value='account' onClick={handleView}>Account </button>
                        <button className="button" value='Home' onClick={handleView}>Home </button>
                        <button class="button logout-button" onClick={clickHandler}>Logout </button>
                </div>
                <div className="full-width">
                    {renderForm()}
                </div>

            </div>

        </div>
    )
}





export default UserPortal

