import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login(props) {
    
    const host = "http://localhost:8000"
    //cred mean's creditentails--
    const [cred, setCred] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const handelOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: cred.email, password: cred.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect to HomePage--
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Login SuccessFully", "success")
            navigate("/");
        } else {
            // alert("Invaild Credintials, Please try again...")
            props.showAlert("Invaild Credentials", "danger")

        }
    }

    return (
        <div>
            <h1>Login - Your Account</h1>
            <form onSubmit={handelOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={cred.email} aria-describedby="emailHelp" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={cred.password} onChange={onChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
