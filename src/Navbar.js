import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css"

export default class Navbar extends Component{
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className='Navbar'>
              <div className='logo'>
              <Link exact to='/' className="textSize">Home  </Link>
             </div>
             
             <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>

            </header>
        )
    }
}
