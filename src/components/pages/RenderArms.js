import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderArms = (props) => {

    const [bicepList, setBicepList] = useState([])
    const [tricepList, setTricepList] = useState([])
    const [foreArmList, setForeArmList] = useState([])

    const [bicepBox, setBicepBox] = useState(false)
    const [tricepBox, setTricepBox] = useState(false)
    const [foreArmBox, setForeArmBox] = useState(false)

    useEffect(() => {

        const bicepList = filterBicepList()
        setBicepList(bicepList)
        const tricepList = filterTricepList()
        setTricepList(tricepList)
        const foreArmList = filterForeArmList()
        setForeArmList(foreArmList)
    }, [])

    const filterBicepList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Bicep") {
                list.push(muscleGroup)
                setBicepBox(true)
            }
        }
        return list
    }

    const filterTricepList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Tricep") {
                list.push(muscleGroup)
                setTricepBox(true)
            }
        }
        return list
    }

    const filterForeArmList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Forearm") {
                list.push(muscleGroup)
                setForeArmBox(true)
            }
        }
        return list
    }

    const renderBicepList = () => {
        if (bicepBox === false) {
            return null
        } else {
            let html = bicepList.map((object) => {
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
                    <div className="center">Bicep</div>
                    {html}
                </div>
            )
        }
    }

    const renderTricepList = () => {
        if (tricepBox === false) {
            return null
        } else {
            let html = tricepList.map((object) => {
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
                    <div className="center">Tricep</div>
                    {html}
                </div>
            )
        }
    }

    const renderForeArmList = () => {
        if (foreArmBox === false) {
            return null
        } else {
            let html = foreArmList.map((object) => {
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
                    <div className="center">Forearm</div>
                    {html}
                </div>
            )
        }
    }
    return (
        <div className="flex-col left full-width">
            <div className="flex-col flex-wrap width">
            <div className="flex-col">
                    {renderBicepList()}
                </div>
                <div className="flex-col">
                    {renderTricepList()}
                </div>
                <div className="flex-col">
                    {renderForeArmList()}
                </div>
            </div>
        </div>

    )


}

export default RenderArms