import React, { Component } from 'react'
import seedColors from './seedColors';
import PaletteBox from './PaletteBox';
import Palette from './Palette';
import "./PaletteList.css";


export default  class PaletteList extends Component{

    render() {

        let y =   seedColors.length;
        console.log("box list "+ JSON.stringify(y));
        
        const colorBoxes = seedColors.map(color=>(
        //   console.log(color.id)
        <PaletteBox id = {color.id} color={color.color} name={color.name}
        render = {this.props.render}/>
            ));
        
        // var Palletboxes = new Array(y);
       
    
        return (
            <div className = "colorbox">
              {colorBoxes}
            </div>
        )
        }
}