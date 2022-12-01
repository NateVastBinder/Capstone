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
            }
        }
        return list
    }

    const filterCalfList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Calf") {
                list.push(muscleGroup)
            }
        }
        return list
    }

    const filterHamstringList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Hamstring") {
                list.push(muscleGroup)
            }
        }
        return list
    }

    const filterBicepList = () => {
        const list = []
        for (const muscleGroup of props.user.workouts) {
            if (muscleGroup.muscleGroupName === "Bicep") {
                list.push(muscleGroup)
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
            }
        }
        return list
    }


    const renderQuadList = () => {
        if (quadsList.length > 0) {
            let html =quadsList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                            {object.exerciseName}
                        </div>
                        <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Quads</div>
                    {html}
                </div>
            )
            }
    }

    const renderCalfList = () => {
        if (calfList.length > 0) {
            let html =calfList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Calf</div>
                    {html}
                </div>
            )
        }
    }
    
    const renderHamstringList = () => {
        if (hamstringList.length > 0) {
            let html = hamstringList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Hamstring</div>
                    {html}
                </div>
            )
        }
    }
     
    const renderBicepList = () => {
        if (bicepList.length > 0) {
            let html = bicepList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Bicep</div>
                    {html}
                </div>
            )
        }
    }

    const renderTricepList = () => {
        if (tricepList.length > 0) {
            let html = tricepList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Tricep</div>
                    {html}
                </div>
            )
        }
    }

    const renderForeArmList = () => {
        if (foreArmList.length > 0) {
            let html = foreArmList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Fore Arm</div>
                    {html}
                </div>
            )
        }
    }

    const renderFrontDeltList = () => {
        if (frontDeltList.length > 0) {
            let html = frontDeltList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Front delt</div>
                    {html}
                </div>
            )
        }
    }

    const renderSideDeltList = () => {
        if (sideDeltList.length > 0) {
            let html = sideDeltList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })
            return (
                <div className="flex-col">
                    <div>Side delt</div>
                    {html}
                </div>
            )
        }
    }

    const renderRearDeltList = () => {
        if (rearDeltList.length > 0) {
            let html = rearDeltList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Rear delt</div>
                    {html}
                </div>
            )
        }
    }

    const renderUpperBackList = () => {
        if (upperBackList.length > 0) {
            let html = upperBackList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Upper Back</div>
                    {html}
                </div>
            )
        }
    }

    const renderLatsList = () => {
        if (latsList.length > 0) {
            let html = upperBackList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Lats</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerBackList = () => {
        if (lowerBackList.length > 0) {
            let html = lowerBackList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Lower Back</div>
                    {html}
                </div>
            )
        }
    }

    const renderUpperChestList = () => {
        if (upperChestList.length > 0) {
            let html = upperChestList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Upper Chest</div>
                    {html}
                </div>
            )
        }
    }

    const renderMidChestList = () => {
        if (midChestList.length > 0) {
            let html = midChestList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Mid Chest</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerChestList = () => {
        if (lowerChestList.length > 0) {
            let html = lowerChestList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Lower Chest</div>
                    {html}
                </div>
            )
        }
    }

    const renderUpperAbList = () => {
        if (upperAbList.length > 0) {
            let html = upperAbList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Upper Abs</div>
                    {html}
                </div>
            )
        }
    }

    const renderObliqueList = () => {
        if (obliqueList.length > 0) {
            let html = obliqueList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Obliques</div>
                    {html}
                </div>
            )
        }
    }

    const renderLowerAbList = () => {
        if (lowerAbList.length > 0) {
            let html = lowerAbList.map((object) => {
                return (
                    <div className="flex-col">
                        <div className="flex-row">
                        {object.exerciseName}
                        </div>
                    <div className="flex-row">
                            {object.reps}

                        </div>
                    </div>
                )
            })

            return (
                <div className="flex-col">
                    <div>Lower Abs</div>
                    {html}
                </div>
            )
        }
    }


    return (
        <div className="flex-col left">
            <div className="flex-row">
                Hi {`${props.user.email}`}
            </div>
            <div className="flex-row flex-wrap width center">
            <div className="box flex-col">
                {renderQuadList()}
            </div>
            <div className="box flex-col">
                {renderCalfList()}
            </div>
            <div className="box flex-col">
                {renderHamstringList()}
            </div>
            <div className="box flex-col">
                {renderBicepList()}
            </div>
             <div className="box flex-col">
                {renderTricepList()}
            </div>
            <div className="box flex-col">
                {renderForeArmList()}
            </div>
            <div className="box flex-col">
                {renderFrontDeltList()}
            </div>
            <div className="box flex-col">
                {renderSideDeltList()}
            </div>
            <div className="box flex-col">
                {renderRearDeltList()}
            </div>
            <div className="box flex-col">
                {renderUpperBackList()}
            </div>
            <div className="box flex-col">
                {renderLatsList()}
            </div>
            <div className="box flex-col">
                {renderLowerBackList()}
            </div>
            <div className="box flex-col">
                {renderUpperChestList()}
            </div>
            <div className="box flex-col">
                {renderMidChestList()}
            </div>
            <div className="box flex-col">
                {renderLowerChestList()}
            </div>
            <div className="box flex-col">
                {renderUpperAbList()}
            </div>
            <div className="box flex-col">
                {renderObliqueList()}
            </div>
            <div className="box flex-col">
                {renderLowerAbList()}
            </div>
            </div>
        </div>

    )
}

export default UserAccount