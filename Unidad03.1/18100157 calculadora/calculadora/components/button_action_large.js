const ButtonActionLarge = ({ title,value, color = 'bg-slate-400', hoverColor = 'bg-slate-600', textColor = "text-white", onClickAction }) => {
 
    const localClick = (e) => {
      onClickAction(value);
  }
   return <div target="p-2">
      <button
       
        className={`w-40 h-20 mx-4 text-start rounded-full ${color} hover:${hoverColor} ${textColor}`}
        onClick={localClick}>
        <span className="text-4xl mx-8" >{title}</span>
      
      </button>
  
    </div>
  }
  
  export default ButtonActionLarge;