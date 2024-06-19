import React from 'react'
import SideBar from './SideBar'
import NewsFeeds from './NewsFeeds';

const Homepage = () => {
    const name = "Harries Rill B. Macalatan";
  return (
    <div className='homepage'>
        <SideBar name={name}/>
        <NewsFeeds/>
    </div>
  )
}

export default Homepage