import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Signup = (props) => {
    const [scredentials, setScredentials] = useState({name:"", email:"", password:""});
    const host = 'http://localhost:5000'
    let snavigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({name:scredentials.name, email:scredentials.email, password: scredentials.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            // props.showAlert("Acount created succssfully", "Success")
            snavigate('/login')
          }
        //   else{
        //     props.showAlert("Invalid Credentials", "danger")
        //   }
          setScredentials({name:"", email:"", password:""})
    }
    const handleChange = (e) => {
        setScredentials({ ...scredentials, [e.target.name]: e.target.value });
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="name" className="form-control" id="name" name="name" value = {scredentials.name} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value = {scredentials.email} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" className="form-control" value = {scredentials.password} onChange = {handleChange} aria-describedby="passwordHelp"/>
            <div id="passwordHelp" className="form-text">
                Your password must be greater than 5 characters.
            </div>
            <button  className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
    </div>
  );
}

export default Signup;
