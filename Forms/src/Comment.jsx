import { useState } from "react";
import './Comment.css'
import CommentsForm from "./CommentForm";

export default function Comment() {
    let [Comments, SetComments] = useState([{
        username: "@jeelan",
        remarks: "Great Job!",
        rating: "5"
    }]);

    let addNewComment = (comment) => {
        SetComments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <div>
                <h3>All Comments</h3>
                {
                    Comments.map((comment, idx) => (
                        <div className="comment" key={idx}>
                            <span>{comment.remarks}</span>
                            &nbsp;
                            <span>(rating={comment.rating})</span>
                            <p>-{comment.username}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
