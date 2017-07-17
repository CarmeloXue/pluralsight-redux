import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">BRAND</span>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="author">Author</Link>
            </li>
            <li>
              <Link to="courses">Courses</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
