import React from "react";

function SingleVideo({thumb_img, profile_img, title, channel_name, views, timestamps, video_duration }){
    return (
        <>
        <div className="col-3">
            <div className="thumbnail_img relative">
                <img src ={thumb_img} alt="" 
                className="thumb-img pointer" 
                style={{"width": "100%"}}
                />
                <div className="videos_duration absolute">
                    {video_duration}
                </div>
            <div className="description_option">
                <div className="description_option d-flex align-items-center">
                    <div className="profile_img d-flex">
                        <img src={profile_img}
                        className="channel_image pointer"
                        />
                        <div>
                        <div className="description">
                            {title}
                        </div>
                        <div className="title">
                            <div className="channelname">
                                {channel_name}
                            </div>
                            <div className="time_description d-flex align-items-center">
                                <div className="views">
                                    {views} views
                                </div>
                                <div className="seprate">•</div>
                                <div className="timestamp">
                                    {timestamps}
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
                {/* <div className="title d-flex align-items-center justify-content-center">
                    <span className="channelname">
                        {channel_name}
                    </span>
                    <div className="time_description">
                        <span className="views">
                            {views}
                        </span>
                        <span className="timestamp">
                            {timestamps}
                        </span>
                    </div>
                </div> */}
            </div>
            </div>
        </div>
        </>
    );
}

export default SingleVideo;