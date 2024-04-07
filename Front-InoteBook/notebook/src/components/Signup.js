import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

const host = "http://localhost:8000"

//cred mean's creditentails--
const [cred, setCred] = useState({name: "", email: "", password: ""})
const navigate = useNavigate();

const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
}

const handelOnSubmit = async(e) => {
    e.preventDefault();
    const {name, email, password} = cred;

    const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({name, email, password}), 
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        // redirect to HomePage--
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Account Created SuccessFully","success")
      }else{
        // alert("Invaild Credintials, Please try again...")
        props.showAlert("Invaild Credentials","danger")
      }
}

  return (
    <div>
      <h1 className='center'>Sign Up and Register your Free Account here</h1>
      <form onSubmit={handelOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"  onChange={onChange} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
