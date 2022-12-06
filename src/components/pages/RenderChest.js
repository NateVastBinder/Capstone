import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderChest = (props) => {

    const [upperChestList, setUpperChestList] = useState([])
    const [midChestList, setMidChestList] = useState([])
    const [lowerChestList, setLowerChestList] = useState([])

    const [upperChestBox, setUpperChestBox] = useState(false)
    const [midChestBox, setMidChestBox] = useState(false)
    const [lowerChestBox, setLowerChestBox] = useState(false)

    useEffect(() => {

        const upperChestList = filterUpperChestList()
        setUpperChestList(upperChestList)
        const midChestList = filterMidChestList()
        setMidChestList(midChestList)
        const lowerChestList = filterLowerChestList()
        setLowerChestList(lowerChestList)

    }, [])

    const filterUpperChestList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Upper Chest") {
                list.push(muscleGroup)
                setUpperChestBox(true)
            }
        }
        return list
    }

    const filterMidChestList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Mid Chest") {
                list.push(muscleGroup)
                setMidChestBox(true)
            }
        }
        return list
    }

    const filterLowerChestList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Lower Chest") {
                list.push(muscleGroup)
                setLowerChestBox(true)
            }
        }
        return list
    }

    const renderUpperChestList = () => {
        if (upperChestBox === false) {
            return null
        } else {
            let html = upperChestList.map((object) => {
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
                    <div className="center">Upper Chest</div>
                    {html}
                </div>
            )
        }
    }

    const renderMidChestList = () => {
        if (midChestBox === false) {
            return null
        } else {
            let html = midChestList.map((object) => {
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
                    <div className="center">Mid Chest</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerChestList = () => {
        if (lowerChestBox === false) {
            return null
        } else {
            let html = lowerChestList.map((object) => {
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
                    <div className="center">Lower Chest</div>
                    {html}
                </div>
            )
        }
    }

    return (
        <div className="flex-col left full-width">
            <div className="flex-col flex-wrap width">
            <div className="flex-col">
                    {renderUpperChestList()}
                </div>
                <div className="flex-col">
                    {renderMidChestList()}
                </div>
                <div className="flex-col">
                    {renderLowerChestList()}
                </div>
            </div>
        </div>

    )


}

export default RenderChest