import React from 'react'

interface sidebarProp {
    name: string
}

const SideBar : React.FC<sidebarProp> = ({name}) => {
  return (
    <div className='sidebar-main'>
        <h4>About Me</h4>
        <p>Name: {name}</p>
        <p>Description:</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Praesent tristique magna sit amet purus gravida. Adipiscing at in tellus integer feugiat.
        </p> 
            
          </div>
  )
}

export default SideBar