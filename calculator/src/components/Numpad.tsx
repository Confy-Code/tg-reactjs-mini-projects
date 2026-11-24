import { Divide } from 'lucide-react';

type NumpadProps = {
    setOpClickedTrue: (op: string) => void;
    setOpClickedFalse: () => void;
    getNumber: (num: number) => void;
}

export default function Numpad({ setOpClickedTrue, setOpClickedFalse, getNumber}: NumpadProps) {

    const numpadClassName = "flex border-r border-b border-[#7b7b83] justify-center items-center text-black font-bold text-3xl hover:cursor-pointer hover:bg-[#9FA2C4]";
    const opClassName = "bg-[#f38636] text-white hover:opacity-70 hover:bg-[#f38636]";
    
    return(
        <main className="grid grid-cols-4 grid-rows-6 bg-[#dbdbdb] h-screen">
            <div onClick={() => setOpClickedTrue('AC')} className={`${numpadClassName}`}>
                <span>AC</span>
            </div>
            <div className={`${numpadClassName}`}>+/-</div>
            <div className={`${numpadClassName}`}>%</div>
            <div onClick={() => setOpClickedTrue('/')} className={`${numpadClassName} ${opClassName}`}><Divide/></div>

            <div onClick={() => {
                setOpClickedFalse()
                getNumber(7)}} 
                className={`${numpadClassName}`}>
                <span>7</span>
            </div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(8)}} className={`${numpadClassName}`}>8</div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(9)}} className={`${numpadClassName}`}>9</div>
            <div onClick={() => setOpClickedTrue('*')} className={`${numpadClassName} ${opClassName} `}>X</div>

            <div onClick={() => {
                setOpClickedFalse()
                getNumber(4)}} className={`${numpadClassName}`}>
                <span>4</span>
            </div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(5)}} className={`${numpadClassName}`}>5</div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(6)}} className={`${numpadClassName}`}>6</div>
            <div onClick={() => setOpClickedTrue('-')} className={`${numpadClassName} ${opClassName}`}>-</div>

             <div onClick={() => {
                setOpClickedFalse()
                getNumber(1)}} className={`${numpadClassName}`}>
                <span>1</span>
            </div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(2)}} className={`${numpadClassName}`}>2</div>
            <div onClick={() => {
                setOpClickedFalse()
                getNumber(3)}} className={`${numpadClassName}`}>3</div>
            <div onClick={() => setOpClickedTrue('+')} className={`${numpadClassName} ${opClassName}`}>+</div>

            <div onClick={() => {
                setOpClickedFalse()
                getNumber(0)}} className={`${numpadClassName} col-span-2`}>
                <span>0</span>
            </div>
            <div className={`${numpadClassName}`}>.</div>
            <div className={`${numpadClassName} ${opClassName}`}>=</div>
            
        </main>
    )
}