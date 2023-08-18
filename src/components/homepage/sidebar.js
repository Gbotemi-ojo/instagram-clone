import React from 'react';
import homeIcon from '../../assets/Homepage/home-icon.svg';
import searchIcon from '../../assets/Homepage/search-icon.svg';
import exploreIcon from '../../assets/Homepage/explore-icon.svg';
import reelsIcon from '../../assets/Homepage/instagram-reels-icon.svg';
import messagesIcon from '../../assets/Homepage/message-icon.svg';
import notificationsIcon from '../../assets/Homepage/notification-bell-svgrepo-com.svg';
import createIcon from '../../assets/Homepage/add-icon.svg';
import profileIcon from '../../assets/Homepage/user-profile-icon.svg';
import instagramLogo from '../../assets/Homepage/instagram-logo.svg'
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
            <div className='instagram-logo'>
                <div>Instagram</div>
                <img src={instagramLogo} alt="" />
            </div>
            <div className='navigation-container'>
                {navElements.map(nav => {
                    return <div className='navigation-element'>
                        <img src={nav.image} alt="" />
                        <span>{nav.value}</span>
                    </div>
                })}
            </div>
        </nav>
    )
}
export default Sidebar
