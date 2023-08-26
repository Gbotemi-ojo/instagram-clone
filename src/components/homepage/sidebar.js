import React from 'react';
import homeIcon from '../../assets/Homepage/home-icon.svg';
import searchIcon from '../../assets/Homepage/search-icon.svg';
import exploreIcon from '../../assets/Homepage/explore-icon.svg';
import reelsIcon from '../../assets/Homepage/instagram-reels-icon.svg';
import messagesIcon from '../../assets/Homepage/message-icon.svg';
import notificationsIcon from '../../assets/Homepage/notification-bell-svgrepo-com.svg';
import createIcon from '../../assets/Homepage/add-icon.svg';
import profileIcon from '../../assets/Homepage/user-profile-icon.svg';
import instagramLogo from '../../assets/Homepage/instagram-logo.svg';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const navElements = [
        {
            value: 'Home',
            image: homeIcon,
            url : '/'
        },
        {
            value: 'Search',
            image: searchIcon,
            url: '/search'
        },
        {
            value: 'Explore',
            image: exploreIcon,
            url: '/explore'
        },
        {
            value: 'Reels',
            image: reelsIcon,
            url : '/reels'
        },
        {
            value: 'Messages',
            image: messagesIcon,
            url : '/messages'
        },
        {
            value: 'Notifications',
            image: notificationsIcon,
            url : '/notification'
        },
        {
            value: 'Create',
            image: createIcon,
            url: '/create'
        },
        {
            value: 'Profile',
            image: profileIcon,
            url : '/profile'
        },
    ];
    return (
        <nav className='homepage-navbar'>
            <div className='instagram-logo'>
                <h3>Instagram</h3>
                <img src={instagramLogo} alt="" />
            </div>
            <div className='navigation-container'>
                {navElements.map(nav => {
                    return <NavLink to={nav.url}>
                        <div className='navigation-element'>
                            <img src={nav.image} alt="" />
                            <span>{nav.value}</span>
                        </div>
                    </NavLink>
                })}
            </div>
        </nav>
    )
}
export default Sidebar
