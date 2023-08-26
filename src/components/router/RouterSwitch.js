import React from "react";
import { HashRouter, Routes, Route ,BrowserRouter} from "react-router-dom";
import ShareLayout from "./ShareLayout";
import ShareLayout2 from "./sharelayout2";
import FeedPost from "../homepage/feedPost";
import Reels from "../reels/reels";
import Reel from '../reels/reel';
import Signin from '../../components/sign_in/Sign_in'

const RouteSwitch = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<ShareLayout />}>
                    <Route path="/profile" element={<div>This is the profile.</div>}/>
                    <Route path="lovep" element={<div>This is the reels post 22222222.</div>} />
                    <Route index element={<FeedPost />} path="/" />
                    <Route element = {<div>error here</div>} path="*" />
                </Route>
                <Route path="/" element={<ShareLayout2 />}>
                    <Route path="/reels" element={<Reels />} />
                </Route>
                <Route path="/signin" element = {<Signin /> }/>
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch; 