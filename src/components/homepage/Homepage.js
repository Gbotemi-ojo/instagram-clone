import React from 'react'
import Sidebar from './sidebar';
import FeedPost from './feedPost';
import createIcon from '../../assets/Homepage/add-icon.svg';
import notificationsIcon from '../../assets/Homepage/notification-bell-svgrepo-com.svg';
import './Homepage.css'
function Homepage() {
  return (
    <section className='homepage'>
       <header className='homepage-header'>
        <h3 className='instagram-logo-mobile'>Instagram</h3>
        <div className='homepage-header-btns'>
          <img src={createIcon} alt="" />
          <img src={notificationsIcon} alt="" />
        </div>
       </header>
        <Sidebar />
        <div className='feedpost-container'>
        <FeedPost />
        </div>
    </section>
  )
}
export default Homepage;
