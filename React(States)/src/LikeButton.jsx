import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    function toggleLike() {
        setIsLiked(!isLiked);
    }
    let likeStyle={color:"red"};
    return (
        <>
            <p onClick={toggleLike}>
                {isLiked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)}
            </p>
        </>
    )
}