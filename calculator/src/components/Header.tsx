type HeaderProps = {
    opClicked: boolean;
    num: number
    result: number[]
}

export default function Header({ opClicked, num, result }: HeaderProps) {
    return (
        <header className="flex bg-[#7a7b88] h-25">
            <div className="ml-auto pr-6 text-white font-semibold text-[50px]"><span>
                {opClicked 
                    ? result[0] == Infinity 
                        ? 'ERR'
                        : result[0]
                    : num }
            </span></div>
        </header>
    )
} 