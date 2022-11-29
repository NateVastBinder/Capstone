import Header from "../../components/reusables/Header";
import { useEffect, useState } from "react"
import axios from "axios"
import "../../css/pages/CreateWorkout.css"



const AbsPriority = () => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState('')
    const [bodyPart, setBodyPart] = useState({})


    
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
    
    const submitHandler = () => {
        axios.post(`http://localhost:8080/AddBodyPart`, bodyPart)
            .then((response) => {
                localStorage.setItem("make", response.data.make)
                setBodyPart({
                  name: ''
                })
                navigator('/UserPortal')
            }).catch((e) => {
                console.log(e.response.data.message)
            })
        }




    return (
    <div className="flex-row full-width">
            <div className="center flex-col third-width">
            <button class="submitButton" onClick={submitHandler}>Obliques</button>
            </div>
            <div className="center flex-col third-width">
            <button class="submitButton" onClick={submitHandler}>Upper Abs</button>
            </div>
            <div className="center flex-col third-width">
            <button class="submitButton" onClick={submitHandler}>Lower Abs</button>
            </div>
            
        </div>
    )
}

export default AbsPriority