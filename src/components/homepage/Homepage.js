import React from 'react'
import Sidebar from './sidebar';
import FeedPost from './feedPost';
import './Homepage.css'
function Homepage() {
    const navbar = [
        {
            type : 'Home',
            iconUrl : ''
        }
    ]
  return (
    <section className='homepage'>
       <header className='homepage-header'>
        <div>Instagram</div>
        <img alt="" />
        <img src="" alt="" />
       </header>
        <Sidebar />
        <div className='feedpost-container'>
        <FeedPost />
        </div>
    </section>
  )
}
export default Homepage;
