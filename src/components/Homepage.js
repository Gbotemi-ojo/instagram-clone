import React from 'react'
import Sidebar from './sidebar';
import FeedPost from './feedPost';
import FollowerSugestion from './followerSugestion';

function Homepage() {
    const navbar = [
        {
            type : 'Home',
            iconUrl : ''
        }
    ]
  return (
    <div className='homepage'>
        <Sidebar />
        <div className='feedpost-container'>
        <FeedPost />
        </div>
        {/* <FollowerSugestion /> */}
    </div>
  )
}
export default Homepage;
