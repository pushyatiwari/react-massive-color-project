import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

export default class Navbar extends Component{
    render() {
        return (
            <header className='Navbar'>
              <div className='logo'>
              <Link exact to='/' className="textSize">Home  </Link>
             </div>
             

            </header>
        )
    }
}
