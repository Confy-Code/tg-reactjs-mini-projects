export default function FeatureIcon({icon: Icon, label, color}) {
    return (
        <button title={label} className="flex hover:bg-gray-600 p-1.5 hover:rounded-md hover:cursor-pointer">
            <Icon color={color} width="18px" />
        </button>
    )
}