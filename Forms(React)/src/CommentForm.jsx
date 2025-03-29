import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username cannot be empty!';
    }
    return errors;
};

export default function CommentsForm({ addNewComment }) {
    // let [FormData, SetFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: ""
    // })

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    // function handleInputChange(event) {
    //     SetFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(FormData);
    //     addNewComment(FormData);
    //     SetFormData({
    //         username: "",
    //         remarks: "",
    //         rating: "",
    //     })
    // }

    return (
        <>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="enter username" value={formik.values.username} name="username" onChange={formik.handleChange} />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /><br /><br /><br />
                <label htmlFor="FullName">Remarks:</label>
                <textarea value={formik.values.remarks} id="remarks" placeholder="Add Remarks" onChange={formik.handleChange} name="remarks">Remarks</textarea>
                <br /><br /><br /><br />
                <label htmlFor="FullName">Rating:</label>
                <input type="number" value={formik.values.rating} id="rating" onChange={formik.handleChange} name="rating" min={1} max={5} />
                <br /><br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </>
    )
}