import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password:""});
    const host = 'http://localhost:5000'
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({email:credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            // redirect it
            localStorage.setItem("token", json.authToken);
            // props.showAlert("Logged in Successfully!", "success")
            navigate('/home')
          }
          else{
            console.log('false');
          }
        //   else{
        //     if(json.error==='Invalid email'){
        //         props.showAlert("Invalid email", "danger")
        //     }
        //     else if(json.error==='Invalid password'){

        //         props.showAlert("Invalid password", "danger")
        //     }
        //     else{
        //         props.showAlert("Invalid", "danger")
        //     }
            
            
        //   }
          setCredentials({email:"", password:""})
    }
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div className="container" style={{width: "30rem"}}>
        <form onSubmit={handleSubmit} >
            <div className="container"  >
            <div className="mb-3 justify-content-center align-items-center my-5 mx-1" >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value = {credentials.email} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" className="form-control" value = {credentials.password} onChange = {handleChange} aria-describedby="passwordHelp"/>
            <div id="passwordHelp" className="form-text">
                Your password must be greater than 5 characters.
            </div>
            <button  className="btn btn-primary" type="submit" value="Submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default Login;
