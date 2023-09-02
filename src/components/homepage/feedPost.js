import React,{useEffect} from 'react';
import axios from 'axios';
import profilePic from '../../assets/posts/dummy.jpeg'
// import SimpleImageSlider from "react-simple-image-slider";
import verifiedIcon from '../../assets/Homepage/verified.jpg'
import moreIcon from '../../assets/Homepage/more-icon.svg'
import likeIcon from '../../assets/posts/like.svg';
import commentIcon from '../../assets/posts/comment.svg';
import shareIcon from '../../assets/posts/share.svg';
import saveIcon from '../../assets/posts/save.svg';
import dummyPost from '../../assets/posts/yonce.jpg';
import { useNavigate } from 'react-router-dom';
function FeedPost() {
    let navigate = useNavigate()
    const url = 'http://localhost:8080/instagram-clone';
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null){
            navigate(`/instagram-clone/signin`);
        }
        axios.get(url, {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error.response.data);
            // navigate(`/instagram-clone/signin`);
        })
    }, []);
    const test = ()=>{
        alert("clicked")
    }
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
        },
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
    // const images = [
    //     { url: dummyPost },
    //     { url: dummyPost2 },
    //     { url: dummyPost3 },
    //     { url: dummyPost4 },
    // ]
    return(
        feeds.map((feed,index) => {
            return <section className='post' key={index}>
                <div className='poster-details-container'>
                    <div className='poster-details'>
                        <img src={profilePic} alt="profile-pic" />
                        <div>beyonce</div>
                        <img src={verifiedIcon} alt="verified-icon" className='verified-icon' />
                        <div>.18h</div>
                    </div>
                    <div>
                        <img src={moreIcon} alt="" className='more-icon'/>
                    </div>
                </div>
                {/* <SimpleImageSlider
                    width={510}
                    height={476}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                /> */}
                <img src={dummyPost} alt="" />
                <div className='socials-container'>
                    <div>
                        <img src={likeIcon} alt="like icon" className='like-icon'/>
                        <img src={commentIcon} alt="comment icon" className='comment-icon' />
                        <img src={shareIcon} alt="share icon" className='share-icon' />
                    </div>
                    <img src={saveIcon} alt="save icon" className='save-icon' />
                </div>
                <div className='likes-and-comments-container'>
                    <div>2,983,372 likes</div>
                    <div>view all 673 comment</div>
                    <div>{feed.uploadText}</div>
                    <input type="text" placeholder='Add a comment...' className='input-comment' />
                </div>
            </section>
        })
    )
}

export default FeedPost;




