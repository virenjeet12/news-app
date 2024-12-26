// export function News_item(props){
//     let { sourceName , title, imageURL, newsUrl, } = props;

//     return(
//         <div style={{
//             width : "350px",
//             height: "auto",
//             border : "2px solid black",
//             margin :"5px"
//         }}>
//             <div id="cardimg"><img src={imageURL} alt="loading..." width={240} height={200} style={{backgroundPosition : "cover", borderRadius:"10px"}} /></div>
//             <h3>{title}</h3>
//             <h5>{sourceName}</h5>
//             <a href={newsUrl} style={{textDecoration :"none"}}>READ MORE</a>
//         </div>
//     )
// }

import React from 'react';
import './styling/GridBox.css'; // Create a CSS file for styling

export const GridBox = ({ imageSrc, heading, source, link }) => {
    return (
        <div className="grid-box">
            <img src={imageSrc} alt="image is not available" className="grid-box-image" />
            <div className="grid-box-content">
                <h3 className="grid-box-heading">{heading}</h3>
                <p className="grid-box-source">Source: {source}</p>
                <a href={link} className="grid-box-link" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
};