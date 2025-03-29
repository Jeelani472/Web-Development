import { useState } from "react";

export default function Form() {
    let [FormData, SetFormData] = useState({
        FullName: "",
        username: "",
        password:"",
    });

    function handleInputChange(event) {
        SetFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(FormData);
        SetFormData({
            FullName: "",
            username: "",
            password:"",
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="FullName">Full Name</label>
                <input type="text"
                    placeholder="Enter your Full Name"
                    id="FullName"
                    value={FormData.FullName}
                    onChange={handleInputChange}
                    name="FullName"
                />

                <br /> <br />
                <label htmlFor="username">Username</label>
                <input type="text"
                    placeholder="Enter your username"
                    id="username"
                    value={FormData.username}
                    onChange={handleInputChange}
                    name="username"
                />

                <br /> <br />
                <label htmlFor="password">Password</label>
                <input type="password"
                    placeholder="Enter a password"
                    id="password"
                    value={FormData.password}
                    onChange={handleInputChange}
                    name="password"
                />
                <button>Submit</button>
            </form>
        </>
    );
}