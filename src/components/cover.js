import React from 'react'
import "./cover.css"
import coverVideo from "../media/coverVideo.mp4"

function Cover() {
    return (
        <div className="cover-container">
            <video className="Video" src={ coverVideo } autoPlay loop muted />
            <h1>INFFQU</h1>
            <p>Developer / Designer</p>
        </div>
    )
}

export default Cover;
