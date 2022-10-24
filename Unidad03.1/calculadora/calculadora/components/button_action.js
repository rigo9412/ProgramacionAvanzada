

const ButtonAction = ({ title,value, color = 'bg-slate-400', hoverColor = 'bg-slate-600', textColor = "text-white", onClickAction }) => {
    
    const localClick = (e) => {
        onClickAction(value);
    }
    
    return <div className="p-2">
        <button
            className={`w-20 h-20 rounded-full ${color} hover:${hoverColor} ${textColor}`}
            onClick={localClick}>
            <span className="text-4xl" >{title}</span>
        </button>
    </div>
}
export default ButtonAction;