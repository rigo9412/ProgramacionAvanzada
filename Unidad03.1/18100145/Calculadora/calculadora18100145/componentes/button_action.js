const ButtonAction = ({title,color,onClickAction}) => {
    return <button style={{
        width: '52px',
        height: '52px',
        backgroundColor: color,
        color: textColor
    }} onClick = {onClickAction} >{title}</button>
}

export default ButtonAction;