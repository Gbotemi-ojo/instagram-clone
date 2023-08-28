import React from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import ShareLayout from "./ShareLayout";
import ShareLayout2 from "./sharelayout2";
import FeedPost from "../homepage/feedPost";
import Reels from "../reels/reels";
import Signin from '../../components/sign_in/Sign_in'

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
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch; 