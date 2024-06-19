
import React from 'react'
import Divider from './Divider'

interface navProps{
    buttons: string[],
    selected: string
}

const Navbar: React.FC<navProps> = ({buttons, selected}) => {
  return (
    <div className='navbar'>
        {
            buttons.map((button, index) =>{
                const btnColor = selected === button ? "button-selected" : "button"
                return (
                    <React.Fragment key={index}>
                    {
                        !!index && <Divider type='vertical'/>

                    }
                    <div className={btnColor}>{button}</div>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default Navbar