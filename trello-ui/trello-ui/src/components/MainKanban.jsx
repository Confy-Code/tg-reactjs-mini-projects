import { Plus, Inbox, Calendar, SquareKanban, ArrowLeftRight } from 'lucide-react'

export default function MainKanban() {
    return (
        <main className="grid grid-cols-2 grid-rows-20 gap-4 m-6 min-h-screen lg:grid-cols-6">
            <div className="flex row-start-1 row-end-1 items-center gap-2 bg-[#3e90d2] rounded-lg hover:cursor-pointer hover:opacity-90">
                <Plus color="#f4f9fc" width="20px" className="ml-2" />
                <span className="text-[#f4f9fc] font-semibold hover:opacity-100">Add a list</span>
            </div>
            
            <div className="flex gap-2 row-start-8 items-center justify-center self-end col-start-3 col-span-2 p-1.5 bg-[#18191a] rounded-xl border-[#313234] border-2">
                <div title="Inbox" className="flex gap-1 hover:cursor-pointer hover:bg-[#313234] rounded-lg p-1.5">
                    <Inbox color="#cecfd2" width="16px"/><span className="text-[#cecfd2] font-semibold">Inbox</span>
                </div>
                <div title="Planner" className="flex gap-1 hover:cursor-pointer hover:bg-[#313234] rounded-lg p-1.5">
                    <Calendar color="#cecfd2" width="16px"/><span className="text-[#cecfd2] font-semibold">Planner</span>
                </div>
                <div title="Board" className="flex gap-1 hover:cursor-pointer hover:bg-[#313234] rounded-lg p-1.5">
                    <SquareKanban color="#cecfd2" width="16px"/><span className="text-[#cecfd2] font-semibold">Board</span>
                </div>
                <span title="Switch boards" className="flex text-[#cecfd2] font-semibold"> | </span>
                <div className="flex gap-1 hover:cursor-pointer hover:bg-[#313234] rounded-lg p-1.5">
                    <ArrowLeftRight color="#cecfd2" width="16px"/><span className="text-[#cecfd2] font-semibold">Switch boards</span>
                </div>
            </div>
        </main>
    )
}