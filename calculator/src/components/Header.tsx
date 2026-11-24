type HeaderProps = {
    opClicked: boolean;
    num: number
}

export default function Header({ opClicked, num }: HeaderProps) {
    return (
        <header className="flex bg-[#7a7b88] h-25">
            <div className="ml-auto pr-6 text-white font-semibold text-[50px]"><span>{opClicked ? " " : num }</span></div>
        </header>
    )
} 