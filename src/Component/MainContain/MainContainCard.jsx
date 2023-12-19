import React from 'react'
import './MainContain.css'

const MainContainCard = (prop) => {
  return (
    <div className='lowerContents'>
        <img src={prop.icon} alt="" className='iconImages'/>
        <h2 className='category'>{prop.category}</h2>
        <h3 className='description'>{prop.description}</h3>
    </div>
  )
}

export default MainContainCard