import React from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import ShareLayout from "./ShareLayout";
import ShareLayout2 from "./sharelayout2";
import FeedPost from "../homepage/feedPost";
import Reels from "../reels/reels";
import Signin from '../sign_in/Sign_in';
import Signup from '../sign_up/sign_up';
const RouteSwitch = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<ShareLayout />}>
                    <Route path="instagram-clone/profile" element={<div>This is the profile.</div>}/>
                    <Route index element={<FeedPost />} path="instagram-clone" />
                    <Route element = {<div>error here</div>} path="*" />
                </Route>
                <Route path="/" element={<ShareLayout2 />}>
                    <Route path="instagram-clone/reels" element={<Reels />} />
                </Route>
                <Route path="instagram-clone/signin" element = {<Signin /> }/>
                <Route path="instagram-clone/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch; 