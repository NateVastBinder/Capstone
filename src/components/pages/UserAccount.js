import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/pages/UserAccount.css'

const UserAccount = (props) => {

    const [user, setUser] = useState({})
    const [quadsList, setQuadsList] = useState([])
    const [calfList, setCalfList] = useState([])
    const [hamstringList, setHamstringList] = useState([])

    const [bicepList, setBicepList] = useState([])
    const [tricepList, setTricepList] = useState([])
    const [foreArmList, setForeArmList] = useState([])

    const [frontDeltList, setFrontDeltList] = useState([])
    const [sideDeltList, setSideDeltList] = useState([])
    const [rearDeltList, setRearDeltList] = useState([])

    const [upperBackList, setUpperBackList] = useState([])
    const [latsList, setLatsList] = useState([])
    const [lowerBackList, setLowerBackList] = useState([])

    const [upperChestList, setUpperChestList] = useState([])
    const [midChestList, setMidChestList] = useState([])
    const [lowerChestList, setLowerChestList] = useState([])

    const [upperAbList, setUpperAbList] = useState([])
    const [obliqueList, setObliqueList] = useState([])
    const [lowerAbList, setLowerAbList] = useState([])

    const [quadBox, setQuadBox] = useState(false)
    const [calfBox, setCalfBox] = useState(false)
    const [hamstringBox, setHamStringBox] = useState(false)

    const [bicepBox, setBicepBox] = useState(false)
    const [tricepBox, setTricepBox] = useState(false)
    const [foreArmBox, setForeArmBox] = useState(false)

    const [frontDeltBox, setFrontDeltBox] = useState(false)
    const [sideDeltBox, setSideDeltBox] = useState(false)
    const [rearDeltBox, setRearDeltBox] = useState(false)

    const [upperBackBox, setUpperBackBox] = useState(false)
    const [latsBox, setLatsBox] = useState(false)
    const [lowerBackBox, setLowerBackBox] = useState(false)

    const [upperChestBox, setUpperChestBox] = useState(false)
    const [midChestBox, setMidChestBox] = useState(false)
    const [lowerChestBox, setLowerChestBox] = useState(false)

    const [upperAbBox, setUpperAbBox] = useState(false)
    const [obliqueBox, setObliqueBox] = useState(false)
    const [lowerAbBox, setLowerAbBox] = useState(false)


    useEffect(() => {

        const quadList = filterQuadList()
        setQuadsList(quadList)
        const calfList = filterCalfList()
        setCalfList(calfList)
        const hamstringList = filterHamstringList()
        setHamstringList(hamstringList)

        const bicepList = filterBicepList()
        setBicepList(bicepList)
        const tricepList = filterTricepList()
        setTricepList(tricepList)
        const foreArmList = filterForeArmList()
        setForeArmList(foreArmList)

        const frontDeltList = filterFrontDeltList()
        setFrontDeltList(frontDeltList)
        const sideDeltList = filterSideDeltList()
        setSideDeltList(sideDeltList)
        const rearDeltList = filterRearDeltList()
        setRearDeltList(rearDeltList)

        const upperBackList = filterUpperBackList()
        setUpperBackList(upperBackList)
        const latsList = filterLatsList()
        setLatsList(latsList)
        const lowerBackList = filterLowerBackList()
        setLowerBackList(lowerBackList)

        const upperChestList = filterUpperChestList()
        setUpperChestList(upperChestList)
        const midChestList = filterMidChestList()
        setMidChestList(midChestList)
        const lowerChestList = filterLowerChestList()
        setLowerChestList(lowerChestList)

        const upperAbList = filterUpperAbList()
        setUpperAbList(upperAbList)
        const obliqueList = filterObliqueList()
        setObliqueList(obliqueList)
        const lowerAbList = filterLowerAbList()
        setLowerAbList(lowerAbList)

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
            <div className="flex-row">
                Hi {`${props.user.email}`}
            </div>
            <div className="flex-col flex-wrap width">
                <div className="center">
                    Your workouts
                </div>
                <div className="flex-col">
                    {renderQuadList()}
                </div>
                <div className="flex-col">
                    {renderCalfList()}
                </div>
                <div className="flex-col">
                    {renderHamstringList()}
                </div>
                <div className="flex-col">
                    {renderBicepList()}
                </div>
                <div className="flex-col">
                    {renderTricepList()}
                </div>
                <div className="flex-col">
                    {renderForeArmList()}
                </div>
                <div className="flex-col">
                    {renderFrontDeltList()}
                </div>
                <div className="flex-col">
                    {renderSideDeltList()}
                </div>
                <div className="flex-col">
                    {renderRearDeltList()}
                </div>
                <div className="flex-col">
                    {renderUpperBackList()}
                </div>
                <div className="flex-col">
                    {renderLatsList()}
                </div>
                <div className="flex-col">
                    {renderLowerBackList()}
                </div>
                <div className="flex-col">
                    {renderUpperChestList()}
                </div>
                <div className="flex-col">
                    {renderMidChestList()}
                </div>
                <div className="flex-col">
                    {renderLowerChestList()}
                </div>
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

export default UserAccount