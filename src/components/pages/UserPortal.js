import Header from "../../components/reusables/Header";
import '../../css/pages/CreateWorkout.css'
import { useEffect, useState } from "react"
import axios from "axios"
import CreateWorkout from './CreateWorkout'
import UserAccount from './UserAccount'


const UserPortal = () => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState('')


    useEffect(() => {
        if(localStorage.getItem("email")) {
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
    const handleView =(event) => {
        setForm(event.target.value)
    }

    const renderForm = () => {
        switch(form) {
            case 'create-workout':
            return (
                < CreateWorkout/>
        )
        break;
        }
        switch(form) {
            case 'account':
            return (
                < UserAccount/>
        )
        break;
        }
     }

        


            

    return (
        <div className="flex-col container background">
         <Header headerText={`Welcome ${user.email}`} user={user} setUser = {setUser} />
           <div className = "flex-row center margin-bottom">
            <div class="wrap button-left">
            <button className="button" value = 'create-workout' onClick={handleView}>Create Workout</button>
            </div>
            <div class="wrap button-left ">
            <button className="button" value = 'account' onClick={handleView}>Account </button>
            </div>
            <div class="wrap button-left ">
            <button className="button" value = 'delete-cars' onClick={handleView}>Clear </button>
            </div>
            </div>
            <div>
                {renderForm()}
            </div>
        </div>
    )
}
    
    



export default UserPortal

