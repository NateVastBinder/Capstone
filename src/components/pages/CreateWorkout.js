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



const CreateWorkout = (props) => {

    const [form, setForm] = useState('')
    
    const handleView =(event) => {
        setForm(event.target.value)
    }

    const renderForm = () => {
        switch(form) {
            case 'Back':
            return (
                < BackPriority user={props.user} setUser={props.setUser} />
        )
        break;
        }
        switch(form) {
            case 'Chest':
            return (
                < PriorityChest user={props.user} setUser={props.setUser} />
        )
        break;
        }
        switch(form) {
            case 'Arms':
            return (
                < ArmsPriority user={props.user} setUser={props.setUser} />
        )
        break;
        }
        switch(form) {
            case 'Shoulder':
            return (
                <ShoulderPriority user={props.user} setUser={props.setUser} />
        )
        break;
        }
        switch(form) {
            case 'Abs':
            return (
                < AbsPriority user={props.user} setUser={props.setUser} />
        )
        break;
        }
        switch(form) {
            case 'Legs':
            return (
                < LegsPriority user={props.user} setUser={props.setUser} />
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