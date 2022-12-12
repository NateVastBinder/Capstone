import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'
import RenderBack from './RenderBack.js'
import RenderLegs from "./RenderLegs.js"
import RenderArms from "./RenderArms.js"
import RenderShoulder from "./RenderShoulder.js"
import RenderChest from "./RenderChest.js"
import RenderAbs from "./RenderAbs.js"

const UserAccount = (props) => {

    
    const [form, setForm] = useState('')

    const handleView = (event) => {
        setForm(event.target.value)
    }

    const renderForm = () => {
        switch (form) {
            case 'Back':
                return (
                    < RenderBack user={props.user} setUser={props.setUser} />
                )
                break;
        } switch (form) {
            case 'Legs':
                return (
                    < RenderLegs user={props.user} setUser={props.setUser} />
                )
                break;
        }switch (form) {
            case 'Arms':
                return (
                    < RenderArms user={props.user} setUser={props.setUser} />
                )
                break;
        }switch (form) {
            case 'Shoulder':
                return (
                    < RenderShoulder user={props.user} setUser={props.setUser} />
                )
                break;
        }switch (form) {
            case 'Chest':
                return (
                    < RenderChest user={props.user} setUser={props.setUser} />
                )
                break;
        }switch (form) {
            case 'Abs':
                return (
                    < RenderAbs user={props.user} setUser={props.setUser} />
                )
                break;
        }
    }

    return (
        <div className="flex-col left full-width">
            <div className="full-width left">
                <div className="flex-row workout-body full-width">
                    <button className="workout-button sixth-width" value='Back' onClick={handleView}>Back</button>
                    <button className="workout-button sixth-width" value='Chest' onClick={handleView}>Chest</button>
                    <button className="workout-button sixth-width" value='Arms' onClick={handleView}>Arms</button>
                    <button className="workout-button sixth-width" value='Shoulder' onClick={handleView}>Shoulder</button>
                    <button className="workout-button sixth-width" value='Abs'onClick={handleView}>Abs</button>
                    <button className="workout-button sixth-width" value='Legs' onClick={handleView}>Legs</button>
                </div>
            </div>
            <div className="flex-col flex-wrap width">
                <div className="center">
                    Your workouts
                </div>
                <div className="full-width ">
                    {renderForm()}
                </div>
            </div>
        </div>

    )
}

export default UserAccount