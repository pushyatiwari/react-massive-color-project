import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css";



export default class Palette extends Component{

   render() {
    //    let y =   this.props.colors[0].color;
    //    console.log(" color: "+y);
       ///
       let y =   this.props.colors;
       console.log("button clicked");
    //    console.log(" color: "+JSON.stringify(y));
       const colorBoxes = y.map(color=>(
         <ColorBox background={color.color} name={color.name} />
         ));

       return (
           <div className="Palette">
               
               {colorBoxes}
             
           </div>
       )
   }

}


 