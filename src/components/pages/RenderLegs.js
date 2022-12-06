import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const RenderLegs = (props) => {

    const [quadsList, setQuadsList] = useState([])
    const [calfList, setCalfList] = useState([])
    const [hamstringList, setHamstringList] = useState([])

    const [quadBox, setQuadBox] = useState(false)
    const [calfBox, setCalfBox] = useState(false)
    const [hamstringBox, setHamStringBox] = useState(false)

    useEffect(() => {

        const quadList = filterQuadList()
        setQuadsList(quadList)
        const calfList = filterCalfList()
        setCalfList(calfList)
        const hamstringList = filterHamstringList()
        setHamstringList(hamstringList)

    }, [])

    const filterQuadList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Quads") {
                list.push(muscleGroup)
                setQuadBox(true)
            }
        }
        return list
    }

    const filterCalfList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Calf") {
                list.push(muscleGroup)
                setCalfBox(true)
            }
        }
        return list
    }

    const filterHamstringList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Hamstring") {
                list.push(muscleGroup)
                setHamStringBox(true)
            }
        }
        return list
    }

    const renderQuadList = () => {
        if (quadBox === false) {
            return null
        } else {
            let html = quadsList.map((object) => {
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
                    <div className="center">Quads</div>
                    {html}
                </div>
            )
        }
    }

    const renderCalfList = () => {
        if (calfBox === false) {
            return null
        } else {
            let html = calfList.map((object) => {
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
                    <div className="center">Calf</div>
                    {html}
                </div>
            )
        }
    }

    const renderHamstringList = () => {
        if (hamstringBox === false) {
            return null
        } else {
            let html = hamstringList.map((object) => {
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
                    <div className="center">Hamstring</div>
                    {html}
                </div>
            )
        }
    }


    return (
        <div className="flex-col left full-width">
            <div className="flex-col flex-wrap width">
                <div className="flex-col">
                    {renderQuadList()}
                </div>
                <div className="flex-col">
                    {renderCalfList()}
                </div>
                <div className="flex-col">
                    {renderHamstringList()}
                </div>
            </div>
        </div>

    )
}

export default RenderLegs