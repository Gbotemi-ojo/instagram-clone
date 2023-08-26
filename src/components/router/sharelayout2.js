import React from 'react'
import Sidebar from '../homepage/sidebar'
// import FeedPost from '../homepage/feedPost';
import createIcon from '../../assets/Homepage/add-icon.svg'
import notificationsIcon from '../../assets/Homepage/notification-bell-svgrepo-com.svg';
import { Outlet } from 'react-router-dom'
// import { NavLink,Link } from 'react-router-dom'
import '../homepage/Homepage.css'
function ShareLayout2() {
    return (
        <section className='homepage'>
            <Sidebar />
            <div className='feedpost-container'>
                <Outlet />
            </div>
        </section>
    )
}
export default ShareLayout2;