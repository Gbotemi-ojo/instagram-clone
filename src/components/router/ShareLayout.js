import React from 'react'
import Sidebar from '../homepage/sidebar'
// import FeedPost from '../homepage/feedPost';
import createIcon from '../../assets/Homepage/add-icon.svg'
import notificationsIcon from '../../assets/Homepage/notification-bell-svgrepo-com.svg';
import { Outlet } from 'react-router-dom'
// import { NavLink,Link } from 'react-router-dom'
import '../homepage/Homepage.css'
function ShareLayout() {
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
                <Outlet/>
            </div>
        </section>
    )
}
export default ShareLayout;
