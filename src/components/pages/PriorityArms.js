import Header from "../../components/reusables/Header";
import { useEffect, useState } from "react"
import axios from "axios"
import "../../css/pages/CreateWorkout.css"



const ShoulderPriority = () => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState('')
    const [muscleGroupList, setMuscleGroupList] = useState([])


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

    const submitHandler = (event) => {
        const muscle = event.target.value
        axios.get(`http://localhost:8080/getAllMuscleGroup/${muscle}`)
            .then((response) => {
                console.log(response.data)
                setMuscleGroupList(response.data)
            }).catch((e) => {
                console.log(e.response.data.message)
            })
    }

    const showAll = () => {


        //user.vehicles.map to do it on the user 
        return muscleGroupList.map((muscleGroup) => {
            return (
                <div className=" flex-rowjustify-center">
                    <div className='flex-col'>
                        <div className="flex-row ">
                            {muscleGroup.exerciseName}
                            {muscleGroup.reps}</div>
                    </div>
                </div>
    
            )
    
        })
    
    }




    return (
        <div className="flex-col full-width">
            <div className="flex-row">
            <div className="center flex-col third-width">
                <button class="submitButton" value='Bicep' onClick={submitHandler}>Bicep</button>
            </div>
            <div className="center flex-col third-width">
                <button class="submitButton" value='Tricep' onClick={submitHandler}>Tricep</button>
            </div>
            <div className="center flex-col third-width">
                <button class="submitButton" value='Forearm' onClick={submitHandler}>Forearm</button>
            </div>
            </div>
            <div className="center flex-col">
                <div className="flex-col box third-width center">
                {showAll()}
                </div>
            </div>
        </div>
    )
}

export default ShoulderPriority