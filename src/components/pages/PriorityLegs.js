import Header from "../../components/reusables/Header";
import { useEffect, useState } from "react"
import axios from "axios"
import "../../css/pages/Priority.css"



const LegsPriority = (props) => {

    const [form, setForm] = useState('')
    const [bodyPart, setBodyPart] = useState("")
    const [muscleGroupList, setMuscleGroupList] = useState([])
    const [button, setButton] = useState(false)

    const submitHandler = (event) => {
        const muscle = event.target.value
        axios.get(`http://localhost:8080/getAllMuscleGroup/${muscle}`)
            .then((response) => {
                console.log(response.data)
                setBodyPart(`${muscle}`)
                setMuscleGroupList(response.data)
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
        //user.vehicles.map to do it on the user 
        return muscleGroupList.map((muscleGroup) => {
            return (
                <div className=" flex-row justify-center">
                    <div className='flex-col'>
                        <div className="flex-row ">
                            {muscleGroup.exerciseName}
                            {muscleGroup.reps}</div>
                    </div>
                </div>
    
            )
    
        })
    
    }

    const toggleButton = (workout) => {
            if (button === false) {
                return null

            } else {
                return(
                    <button onClick={addToUser}>BUY</button>
                )
            }

    }




    return (
        <div className="flex-col priority-width">
            <div className="flex-row center main-body">
            <div className="center flex-col third-width">
                <button className="button" value='Quads' onClick={submitHandler}>Quads</button>
            </div>
            <div className="center flex-col third-width">
                <button className="button" value='Hamstring' onClick={submitHandler}>Hamstring</button>
            </div>
            <div className="center flex-col third-width">
                <button className="button" value='Calf' onClick={submitHandler}>Calf</button>
            </div>
            </div>
            <div className="center flex-col">
                <div className="flex-col box third-width center">
                {showAll()}
                {toggleButton()}
                </div>
               
            </div>
        </div>
    )
}

export default LegsPriority