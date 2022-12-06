import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderAbs = (props) => {

    const [upperAbList, setUpperAbList] = useState([])
    const [obliqueList, setObliqueList] = useState([])
    const [lowerAbList, setLowerAbList] = useState([])


    const [upperAbBox, setUpperAbBox] = useState(false)
    const [obliqueBox, setObliqueBox] = useState(false)
    const [lowerAbBox, setLowerAbBox] = useState(false)

    useEffect(() => {


        const upperAbList = filterUpperAbList()
        setUpperAbList(upperAbList)
        const obliqueList = filterObliqueList()
        setObliqueList(obliqueList)
        const lowerAbList = filterLowerAbList()
        setLowerAbList(lowerAbList)

    }, [])

    const filterUpperAbList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Upper Ab") {
                list.push(muscleGroup)
                setUpperAbBox(true)
            }
        }
        return list
    }

    const filterObliqueList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Oblique") {
                list.push(muscleGroup)
                setObliqueBox(true)
            }
        }
        return list
    }

    const filterLowerAbList = () => {
        console.log(props.user)
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Lower Ab") {
                list.push(muscleGroup)
                setLowerAbBox(true)
            }
        }
        return list
    }

   

    

    const renderUpperAbList = () => {
        if (upperAbBox === false) {
            return null
        } else {
            let html = upperAbList.map((object) => {
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
                    <div className="center">Upper Ab</div>
                    {html}
                </div>
            )
        }
    }

    const renderObliqueList = () => {
        if (obliqueBox === false) {
            return null
        } else {
            let html = obliqueList.map((object) => {
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
                    <div className="center">Oblique</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerAbList = () => {
        if (lowerAbBox === false) {
            return null
        } else {
            let html = lowerAbList.map((object) => {
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
                    <div className="center">Lower Ab</div>
                    {html}
                </div>
            )
        }
    }
    return (
        <div className="flex-col left full-width">
            <div className="flex-col flex-wrap width">
            <div className="flex-col">
                    {renderUpperAbList()}
                </div>
                <div className="flex-col">
                    {renderObliqueList()}
                </div>
                <div className="flex-col">
                    {renderLowerAbList()}
                </div>
            </div>
        </div>

    )

}

export default RenderAbs