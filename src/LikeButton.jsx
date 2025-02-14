import React from "react";
export default function LikeButton(){
    const [isLiked,setIsliked]=React.useState(false);
    function Onclk(){
        setIsliked(!isLiked);
        let n=isLiked;
    }
    return (<div>
        <p onClick={Onclk} >
        {isLiked ?<i className="fa-solid fa-heart"  style={{color:"red"}}></i> :<i className="fa-regular fa-heart"  ></i>}</p>
    </div>);
}