import React from 'react'
import likeIcon from '../../assets/posts/like.svg';
import commentIcon from '../../assets/posts/comment.svg';
import directIcon from '../../assets/posts/share.svg';
import saveIcon from '../../assets/posts/save.svg';
import moreIcon from '../../assets/Homepage/more-icon.svg'
import './reel.css'
function Reel(props) {
  const play_pause_video = (event)=>{
    const video_paused = event.target.paused
    if(video_paused){
      event.target.play();
      return;
    }
    event.target.pause();

  }
  return (
    <div className='reel'>
          {/* <video src={vid} controls className='reel-video' height="700" width='500'></video> */}
      <video src={props.vid} className='reel-video' controlsList='nodownload noremoteplayback' controls onClick={play_pause_video}></video>
          <div className='reels-btns'>
            <img src={likeIcon} alt="" />
            <img src={commentIcon} alt="" />
            <img src={directIcon} alt="" />
            <img src={saveIcon} alt="" />
            <img src={moreIcon} alt="" />
          </div>
    </div>
  )
}

export default Reel