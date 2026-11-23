import Header from './components/Header'
import Dashboard from './components/Dashboard'
import BoardKanban from './components/BoardKanban';

import { useState } from 'react';

export default function App() {
    const [isKanbanShown, setIsKanbanShown] = useState(false)
    const [clickedName, setClickedName] = useState("")

    function renderKanban() {
        setIsKanbanShown((prevState) => !prevState)
    }

    function returnHome() {
        setIsKanbanShown(false)
    }

    function getName(name){
        setClickedName(name)
    }

    return (
        <>
            <Header returnHome={returnHome} />
            {isKanbanShown ? <BoardKanban name={clickedName} /> : <Dashboard renderKanban={renderKanban} getName={getName}/>}
        </>
    )
}