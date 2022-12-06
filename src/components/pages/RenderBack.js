import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderBack = (props) => {

    const [upperBackList, setUpperBackList] = useState([])
    const [latsList, setLatsList] = useState([])
    const [lowerBackList, setLowerBackList] = useState([])

    const [upperBackBox, setUpperBackBox] = useState(false)
    const [latsBox, setLatsBox] = useState(false)
    const [lowerBackBox, setLowerBackBox] = useState(false)


    useEffect(() => {

        const upperBackList = filterUpperBackList()
        setUpperBackList(upperBackList)
        const latsList = filterLatsList()
        setLatsList(latsList)
        const lowerBackList = filterLowerBackList()
        setLowerBackList(lowerBackList)

    }, [])

    const filterUpperBackList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Upper Back") {
                list.push(muscleGroup)
                setUpperBackBox(true)
            }
        }
        return list
    }

    const filterLatsList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Lats") {
                list.push(muscleGroup)
                setLatsBox(true)
            }
        }
        return list
    }

    const filterLowerBackList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Lower Back") {
                list.push(muscleGroup)
                setLowerBackBox(true)
            }
        }
        return list
    }

    const renderUpperBackList = () => {
        if (upperBackBox === false) {
            return null
        } else {
            let html = upperBackList.map((object) => {
                return (
                    <div className=" flex-row justify-center full-width">
                        <div className='flex-col full-width'>
                            <div className="flex-row full-width">
                                <div className="flex-col left full-width content-box-margins"> {object.exerciseName}
                                </div>
                                <div className="flex-col right "> {object.reps}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col view-workouts-box">
                    <div className="center">Upper Back</div>
                    {html}
                </div>
            )
        }
    }

    const renderLatsList = () => {
        if (latsBox === false) {
            return null
        } else {
            let html = latsList.map((object) => {
                return (
                    <div className=" flex-row justify-center full-width">
                        <div className='flex-col full-width'>
                            <div className="flex-row full-width">
                                <div className="flex-col left full-width content-box-margins"> {object.exerciseName}
                                </div>
                                <div className="flex-col right "> {object.reps}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col view-workouts-box">
                    <div className="center">Lats</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerBackList = () => {
        if (lowerBackBox === false) {
            return null
        } else {
            let html = lowerBackList.map((object) => {
                return (
                    <div className=" flex-row justify-center full-width">
                        <div className='flex-col full-width'>
                            <div className="flex-row full-width">
                                <div className="flex-col left full-width content-box-margins"> {object.exerciseName}
                                </div>
                                <div className="flex-col right "> {object.reps}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col view-workouts-box">
                    <div className="center">Lower Back</div>
                    {html}
                </div>
            )
        }
    }
    return (
        <div className="flex-col flex-wrap width">
            <div className="flex-col">
                {renderUpperBackList()}
            </div>
            <div className="flex-col">
                {renderLatsList()}
            </div>
            <div className="flex-col">
                {renderLowerBackList()}
            </div>
        </div>
    )

}

export default RenderBack 