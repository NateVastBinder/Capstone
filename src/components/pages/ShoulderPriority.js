import Header from "../../components/reusables/Header";
import { useEffect, useState } from "react"
import axios from "axios"
import "../../css/pages/Priority.css"



const ShoulderPriority = (props) => {

    const [form, setForm] = useState('')
    const [bodyPart, setBodyPart] = useState("")
    const [muscleGroupList, setMuscleGroupList] = useState([])
    const [box, setBox] = useState(false)
    const [button, setButton] = useState(false)

    const submitHandler = (event) => {
        const muscle = event.target.value
        axios.get(`http://localhost:8080/getAllMuscleGroup/${muscle}`)
            .then((response) => {
                console.log(response.data)
                setBodyPart(`${muscle}`)
                setMuscleGroupList(response.data)
                setBox(true)
                setButton(true)
            }).catch((e) => {
                console.log(e.response.data.message)
            })
    }


    const addToUser = (event) => {

        axios.post(`http://localhost:8080/AddWorkout/${bodyPart}`, props.user)
        .then((response) => {
            console.log(response.data)
            props.setUser(response.data)
        }).catch((e) => {
            console.log(e)
        })

    }

    const showAll = () => {
        if (box === false) {
            return null
        } else {
            return (
                <div className="box flex-col full-width center">
                    <div>{muscleGroupList[0].muscleGroupName} </div>
                    {
                        muscleGroupList.map((muscleGroup) => {
                            return (
                                <div className=" flex-row justify-center full-width">
                                    <div className='flex-col full-width'>
                                        <div className="flex-row full-width">
                                            <div className="flex-col left full-width content-box-margins"> {muscleGroup.exerciseName}
                                            </div>
                                            <div className="flex-col right "> {muscleGroup.reps}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button className="workout-button" onClick={addToUser}>SAVE</button>
                </div>
            )
        }
    }





    return (
        <div className="flex-col priority-width">
            <div className="flex-row center main-body">
                <div className="center flex-col third-width">
                    <button className="create-workout-button" value='Front Delt' onClick={submitHandler}>Front Delt</button>
                </div>
                <div className="center flex-col third-width">
                    <button className="create-workout-button" value='Side Delt' onClick={submitHandler}>Side Delt</button>
                </div>
                <div className="center flex-col third-width">
                    <button className="create-workout-button" value='Rear Delt' onClick={submitHandler}>Rear Delt</button>
                </div>
            </div>
            <div className="center flex-col">
                <div className="flex-col three-fourths-width center">
                    {showAll()}
                </div>

            </div>
        </div>
    )
}

export default ShoulderPriority