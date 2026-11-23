import trelloBg from '../assets/trello_bg.webp'

import NavKanban from './NavKanban'
import MainKanban from './MainKanban'

export default function BoardKanban(props) {
    return (
        <>
            <title>{`${props.name} | Trello`}</title>
            <div className="fixed min-h-screen">
                <div
                    style={{ backgroundImage: `url(${trelloBg})` }}
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                />
                
                <main className="relative min-w-screen">
                    <NavKanban name={props.name}/>
                    <MainKanban />
                </main>
            </div>
        </>
    )
}