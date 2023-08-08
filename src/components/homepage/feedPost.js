import React from 'react';
import profilePic from '../images/posts/dummy.jpeg';
import SimpleImageSlider from "react-simple-image-slider";
// import verifedIcon from '../images/posts/verified-icon.svg';
import likeIcon from '../images/posts/like.svg';
import commentIcon from '../images/posts/comment.svg';
import shareIcon from '../images/posts/share.svg';
import saveIcon from '../images/posts/save.svg';
import dummyPost from '../images/posts/yonce.jpg';
import dummyPost2 from '../images/posts/yonce2.jpg';
import dummyPost3 from '../images/posts/yonce3.jpg';
import dummyPost4 from '../images/posts/yonce4.jpg';

function FeedPost() {
    const feeds = [
        {
            username: 'beyonce',
            profilePic: profilePic,
            time: '2d',
            postText: 'lorem',
            uploadedpics: [dummyPost],
            verified: true,
            likes: 287,
            uploadText: 'lorem lorem lorem lorem',
            number_of_comments: 983,
            comments: [
                {
                    username: 'gbotemi',
                    comment: 'i really like this',
                    likes: 8,
                }
            ]
        }
    ];
    const images = [
        { url: dummyPost },
        { url: dummyPost2 },
        { url: dummyPost3 },
        { url: dummyPost4 },
    ]
    return(
        feeds.map((feed,index) => {
            return <section className='post'>
                <div className='poster-details-container'>
                    <div className='poster-details'>
                        <img src={profilePic} alt="profile-pic" />
                        <div>beyonce</div>
                        <img src={likeIcon} alt="verified-icon" className='verified-icon' />
                        <div>. 18h</div>
                    </div>
                    <div>
                        ...
                    </div>
                </div>
                <SimpleImageSlider
                    width={510}
                    height={476}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
                <div className='socials-container'>
                    <div>
                        <img src={likeIcon} alt="like icon" className='like-icon' />
                        <img src={commentIcon} alt="comment icon" className='comment-icon' />
                        <img src={shareIcon} alt="share icon" className='share-icon' />
                    </div>
                    <img src={saveIcon} alt="save icon" className='save-icon' />
                </div>
                <div className='likes-and-comments-container'>
                    <div>2,983,372 likes</div>
                    <div>view all 673 comment</div>
                    <input type="text" placeholder='Add a comment...' className='input-comment' />
                </div>
            </section>
        })
    )
}

export default FeedPost;