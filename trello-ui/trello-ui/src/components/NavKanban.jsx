import { Kanban, ChevronDown, Plug, Zap, ListFilter, Star, Users, UserRoundPlus, Ellipsis } from 'lucide-react';
import FeatureIcon from './FeatureIcon'

export default function NavKanban(props) {

    const sideIcons = [
        {icon: Plug, label: "Power-Ups", color:"white"},
        {icon: Zap, label: "Automations", color:"white"},
        {icon: ListFilter, label: "Filter cards", color:"white"}, 
        {icon: Star, label: "Click to star or unstar this board. Starred boards show up at the top of your boards list.", color:"white"}, 
        {icon: Users, label: "Change visibility", color:"white"}
    ]

    const sideIconElements = sideIcons.map(
        (icon) => (
            <FeatureIcon icon={icon.icon} label={icon.label} color={icon.color}/>
        )
    )

    return (
        <nav className="gap-40 flex flex-row items-center p-4 bg-[#013d8b] lg:gap-200">
            <div className="flex gap-4 items-center">
                <span className="flex text-[#ffffff] font-bold flex-nowrap hover:bg-[#464647] p-1.5 hover:cursor-pointer rounded-md">{props.name}</span>
                <div className="flex  hover:bg-[#464647] hover:cursor-pointer p-1.5 rounded-md">
                    <Kanban strokeWidth="4px" width="16px" color="white" className="flex mr-2"/>
                    <ChevronDown width="16px" color="white" />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden lg:flex">
                    {sideIconElements}
                </div>
                <div className="flex items-center gap-2 bg-[#dcdfe4] rounded-md p-1.5 hover:bg-white hover:cursor-pointer">
                    <UserRoundPlus color="#172b4d" width="20px" className="ml-1"/><span className="text-[#172b4d] font-semibold mr-1">Share</span>
                </div>
                <div className="hover:bg-gray-600 hover:cursor-pointer rounded-md p-1.5">
                    <Ellipsis color="white"/>
                </div>
            </div>
        </nav>
    )
}