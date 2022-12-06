import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderShoulder = (props) => {

    const [frontDeltList, setFrontDeltList] = useState([])
    const [sideDeltList, setSideDeltList] = useState([])
    const [rearDeltList, setRearDeltList] = useState([])

    const [frontDeltBox, setFrontDeltBox] = useState(false)
    const [sideDeltBox, setSideDeltBox] = useState(false)
    const [rearDeltBox, setRearDeltBox] = useState(false)

    useEffect(() => {

        const frontDeltList = filterFrontDeltList()
        setFrontDeltList(frontDeltList)
        const sideDeltList = filterSideDeltList()
        setSideDeltList(sideDeltList)
        const rearDeltList = filterRearDeltList()
        setRearDeltList(rearDeltList)
    }, [])

    const filterFrontDeltList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Front Delt") {
                list.push(muscleGroup)
                setFrontDeltBox(true)
            }
        }
        return list
    }

    const filterSideDeltList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Side Delt") {
                list.push(muscleGroup)
                setSideDeltBox(true)
            }
        }
        return list
    }

    const filterRearDeltList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Rear Delt") {
                list.push(muscleGroup)
                setRearDeltBox(true)
            }
        }
        return list
    }

    const renderFrontDeltList = () => {
        if (frontDeltBox === false) {
            return null
        } else {
            let html = frontDeltList.map((object) => {
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
                    <div className="center">Front Delt</div>
                    {html}
                </div>
            )
        }
    }

    const renderSideDeltList = () => {
        if (sideDeltBox === false) {
            return null
        } else {
            let html = sideDeltList.map((object) => {
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
                    <div className="center">Side Delt</div>
                    {html}
                </div>
            )
        }
    }

    const renderRearDeltList = () => {
        if (rearDeltBox === false) {
            return null
        } else {
            let html = rearDeltList.map((object) => {
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
                    <div className="center">Rear Delt</div>
                    {html}
                </div>
            )
        }
    }

    return (
        <div className="flex-col left full-width">
            <div className="flex-col flex-wrap width">
            <div className="flex-col">
                    {renderFrontDeltList()}
                </div>
                <div className="flex-col">
                    {renderSideDeltList()}
                </div>
                <div className="flex-col">
                    {renderRearDeltList()}
                </div>
            </div>
        </div>

    )
}

export default RenderShoulder