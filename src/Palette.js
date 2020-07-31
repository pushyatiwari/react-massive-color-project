import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./Navbar";

import "./Palette.css";



export default class Palette extends Component{

    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
      }
      changeLevel(level) {
        this.setState({ level });
      }
   render() {
    //    let y =   this.props.colors[0].color;
    //    console.log(" color: "+y);
       ///

       const { colors } = this.props.palette;
       const { level } = this.state;
       const colorBoxes = colors[level].map(color => (
         <ColorBox background={color.hex} name={color.name} />
       ));
      
       

       return (
           <div className="Palette">
                 <Navbar level={level} changeLevel={this.changeLevel} />
               {colorBoxes}
             
           </div>
       )
   }

}


 