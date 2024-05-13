import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">DailyYog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/preData">AddPreData</a>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form  ><Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link></form>:<button className="btn btn-primary me-md-2" onClick={handleLogout} type="submit">Logout</button> }
            <div class={`form-check form-switch form-check-reverse text-${props.mode==='light'?'dark':'light'}`}>
              <input class="form-check-input" onClick = {props.toggleMode} type="checkbox" id="flexSwitchCheckReverse"/>
              <label class="form-check-label" for="flexSwitchCheckReverse">Enable Dark Mode</label>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
