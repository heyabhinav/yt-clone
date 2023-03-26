import React from "react";
import './Videos.css'
import SingleVideo from "../SingleVideo/SingleVideo";

function Videos(){
    return (
        <>
        {/* {thumb_img, profile_img, title, channel_name, views, timestamps, video_duration } */}
        <div className="videos">
            <div className="row">
                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/tp4fUH2E8uc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB7YJwCUYgYusZMK9awBUKMg2ONrA" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="Shawn Mendes - When You're Gone"
                channel_name="Shawn Mendes"
                video_duration="3:02"
                views="32M"
                timestamps="11 months ago"
                />

                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/KrgJp7Z1Hv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrk-wAS9IAk3CiaVtvT3k8QejIMg" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="Shawn Mendes - It'll Be Okay"
                channel_name="Shawn Mendes"
                video_duration="3:53"
                views="53M"
                timestamps="1 year ago"
                />

                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/vo_XZmKlJ3A/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFgoUzAP&rs=AOn4CLCkimSvTN90EHel4l00KwrepEiunA" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="Charlie Puth - Charlie Be Quiet!"
                channel_name="Shawn Mendes"
                video_duration="2:09"
                views="3.4M"
                timestamps="5 months ago"
                />
            </div>
            <div className="row">
                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/NQ1wl-xTfv0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUcRnlCZVTWmHRNDxMkhd3h-Cggw" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="Big Announcement for all Coders!"
                channel_name="Apna College"
                video_duration="3:29"
                views="181K"
                timestamps="1 day ago"
                />

                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/q1HZj40ZQrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxlr_zFwe188M9tt6DoV-r4_RO9w" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="Game Over... GitHub Copilot X announced"
                channel_name="Fireship"
                video_duration="4:10"
                views="796K"
                timestamps="2 days ago"
                />

                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/7lECIsRif10/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsiMStlc29UgMz6Or2vsjRFpglfw" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="How To Simplify Your Life"
                channel_name="The School Of Life"
                video_duration="6:35"
                views="5.1M"
                timestamps="3 years ago"
                />
            </div>
        </div>
        </>
    );
}

export default Videos;