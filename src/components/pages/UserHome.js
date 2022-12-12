import Header from "../../components/reusables/Header";
import '../../css/pages/CreateWorkout.css'
import '../../css/pages/UserAccount.css'
import '../../css/pages/UserPortal.css'
import '../../css/pages/UserHome.css'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router'



const UserHome = (props) => {

    const [form, setForm] = useState('')
    const navigator = useNavigate()

    const clickHandler = () => {
        props.setUser({})
        localStorage.removeItem('email')
        navigator('/')
    }

    // useEffect(() => {
    //     if (localStorage.getItem("email")) {
    //         axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
    //             .then((response) => {
    //                 console.log("HERE")
    //                 console.log(response.data)
    //                 setUser(response.data)
    //             })
    //             .catch((e) => {
    //                 console.log(e)
    //             })
    //     }
    // }, [form])


   


    return (
        <div className="flex-col full-width">
            <div className="flex-row center">
                {`Welcome ${props.user.email}`}
            </div>
            <div className="flex-row full-width">
                <div className="flex-col view-workouts-box personal-info third-width info-personal-info">
                    <div className="center"> Personal Information </div>
                    <div> Name : {`${props.user.fullName}`} </div>
                    <div> Email : {`${props.user.email}`} </div>
                    <div>   You have {`${props.user.workouts.length} exercises saved`} </div>
                </div>
            <div className="flex-col view-workouts-box workouts-for-each third-width ">
                    <div className="center"> Workout Information </div>
                    <div>  You have x Back workouts </div>
                    <div>  You have x Ab workouts </div>
                    <div>  You have x shoulder workouts </div>
                    <div>  You have x Arms workouts </div>
                    <div>  You have x Chest workouts </div>
                    <div>  You have x Leg workouts </div>

                    
                </div>
            </div>
        </div>

    )
}


export default UserHome

