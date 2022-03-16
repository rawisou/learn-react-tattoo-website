import React from "react";

import "./TattooPost.css";

const TattooPost = (props) => {
    const { tattoo, onBgClick } = props
    return (
        <div className="tattoo-post">
            <div className="tattoo-post-bg">
                <p onClick={onBgClick}>Close</p>
                </div>
            <div className="tattoo-post-content">
                <img src={tattoo.largeUrl} />
                <h3> {tattoo.title} </h3>
            </div>
        </div>
    )
}

export default TattooPost
