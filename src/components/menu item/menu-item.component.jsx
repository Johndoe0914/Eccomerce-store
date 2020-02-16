import React from "react";

import "./menu-item.styles.scss";

 const MenuItem = ({title, image, size}) => {
    return (
        <div style={{backgroundImage: `url(${image})`
        
        }}className={`${size} menu-item`}>
            <div className="background-image"></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span title="subtitle">Shop Now</span>
        </div>
        </div>
    )
}

export default MenuItem