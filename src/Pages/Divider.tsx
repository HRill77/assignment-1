import React from 'react'

interface dividerProps{
    type : "horizontal" | "vertical"
}


const Divider : React.FC<dividerProps> = ({type}) => {
    const selectedDevicer = type ==="vertical" ? "vertical-divider" : "horizontal-divider"
  return (
    <div className={selectedDevicer}></div>
  )
}

export default Divider