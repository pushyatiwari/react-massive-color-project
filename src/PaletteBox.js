import React, { Component } from 'react'
import seedColors from './seedColors';
import { Link} from "react-router-dom";
import Palette from './Palette';
import "./PaletteBox.css"

export default  class PaletteBox extends Component{
      constructor(props)
      {
          super(props);
          this.handleClick = this.handleClick.bind(this);
      }
    handleClick()
    {
     
        for(let i = 0;i<seedColors.length;i++)
        {
           
            if(seedColors[i].id==this.props.id)
            {
                console.log("seedcolorsi "+JSON.stringify(seedColors[i].id));
               this.props.render(i);
               console.log("funt:- "+ JSON.stringify(this.props.render(i)));
            }
        }
    }

    render() {
        const y =this.props;
   
    console.log("box list "+ JSON.stringify(y));
    // <Link exact to='/palette' className="textSize">Go to Palatte</Link>
        return (
            <div className = "palletBox">
            <Link to={`/palette/${y.id}`} onClick ={this.handleClick}>
            
            <h1>{y.id}</h1>
         
            </Link>
            </div>
        )
    }
}