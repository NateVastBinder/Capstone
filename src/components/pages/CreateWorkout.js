import Header from "../../components/reusables/Header";
import { useEffect, useState } from "react"
import axios from "axios"
import ShoulderPriority from './ShoulderPriority'
import BackPriority from "./BackPriority";
import PriorityChest from "./PriorityChest";
import ArmsPriority from "./PriorityArms";
import AbsPriority from "./PriorityAbs";
import LegsPriority from "./PriorityLegs";
import "../../css/pages/CreateWorkout.css"



const CreateWorkout = () => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState('')


    
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
    
    const handleView =(event) => {
        setForm(event.target.value)
    }

    const renderForm = () => { console.log(form)
        switch(form) {
            case 'Back':
            return (
                < BackPriority/>
        )
        break;
        }
        switch(form) {
            case 'Chest':
            return (
                < PriorityChest/>
        )
        break;
        }
        switch(form) {
            case 'Arms':
            return (
                < ArmsPriority/>
        )
        break;
        }
        switch(form) {
            case 'Shoulder':
            return (
                <ShoulderPriority/>
        )
        break;
        }
        switch(form) {
            case 'Abs':
            return (
                < AbsPriority/>
        )
        break;
        }
        switch(form) {
            case 'Legs':
            return (
                < LegsPriority user={user} />
        )
        break;
        }
     }



    return (
    <div className="flex-col width">
        <div className="flex-row main-body ">
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Back' onClick={handleView}>Back</button>
            </div>
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Chest' onClick={handleView}>Chest</button>
            </div>
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Arms' onClick={handleView}>Arms</button>
            </div>
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Shoulder' onClick={handleView}>Shoulder</button>
            </div>
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Abs' onClick={handleView}>Abs</button>
            </div>
            <div className="center flex-col sixth-width">
            <button className="button" value = 'Legs' onClick={handleView}>Legs</button>
            </div>
            </div>
            <div>
                {renderForm()}
            </div>
        </div>
    )
}

export default CreateWorkout