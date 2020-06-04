import React, { Component } from "react";
import "../styles/header.css";
import { Link } from 'react-router-dom';


import { getUser, removeUserSession } from '../Utils/Common';
class Header extends Component {
  state = {
    lastLogged: null,
  };
  handleLogout = (props) => {
    removeUserSession();
    window.location.href = "/";
    this.props.history.push('/login');
  }


  render() {

    return (
      <div className="header-main row">
        <div className="logo-section col-6">
          <ul className="logo-main">
            <li>
              <span>
                <h1 style={{ color: "white" }}>LOGO</h1>
              </span>
            </li>
          </ul>
        </div>
        <div className="user-info-log col-6" style={{ padding: "0px" }}>
          {
            getUser() &&
            <ul>
              <li><input type="button" className="btn-logout" onClick={() => { this.handleLogout() }} value="Logout" /></li>
              <li><span>Welcome ,{getUser().name}</span></li>
              <li><span>Last Logged :{this.state.lastLogged}</span></li>
            </ul>
          }
            {getUser() == null &&
              <ul>
                  <li className="nav-item"><Link className="nav-link" to={"/login"}>Login</Link></li>
                  
              </ul>
            }
        </div>
      </div>
    );
  }
}

export default Header;
