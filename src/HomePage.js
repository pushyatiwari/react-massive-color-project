import React, { Component } from 'react'
import PaletteList from './PaletteList';
import "./HomePage.css"

export default class Homepage  extends Component{
  
  
    render() {
        return (
            <div >
                <h1 className="topic">Palette List</h1>
               <div className = "list">
                <PaletteList render = {this.props.render}/>
                </div>
            </div>
        )
    }
}