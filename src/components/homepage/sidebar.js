import React from 'react';
import homeIcon from '../images/Homepage/home-icon.svg';
import searchIcon from '../images/Homepage/search-icon.svg';
import exploreIcon from '../images/Homepage/explore-icon.svg';
import reelsIcon from '../images/Homepage/instagram-reels-icon.svg';
import messagesIcon from '../images/Homepage/message-icon.svg';
import notificationsIcon from '../images/Homepage/notification-bell-svgrepo-com.svg';
import createIcon from '../images/Homepage/add-icon.svg';
import profileIcon from '../images/Homepage/user-profile-icon.svg';
function Sidebar() {
    const navElements = [
        {
            value: 'Home',
            image: homeIcon
        },
        {
            value: 'Search',
            image: searchIcon
        },
        {
            value: 'Explore',
            image: exploreIcon
        },
        {
            value: 'Reels',
            image: reelsIcon
        },
        {
            value: 'Messages',
            image: messagesIcon
        },
        {
            value: 'Notifications',
            image: notificationsIcon
        },
        {
            value: 'Create',
            image: createIcon
        },
        {
            value: 'Profile',
            image: profileIcon
        },
    ];
    return (
        <nav className='homepage-navbar'>
            <div className='instagram-logo'>Instagram</div>
            <div className='navigation-container'>
                {navElements.map(nav => {
                    return <div className='navigation-element'>
                        <img src={nav.image} alt="" />
                        <span>{nav.value}</span>
                    </div>
                })}
            </div>
            <div>
                More
            </div>
        </nav>
    )
}
export default Sidebar
