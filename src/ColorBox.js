import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";


class ColorBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
        
    }
changeCopyState(){
    this.setState({copied:true},()=>{
        setTimeout(()=>this.setState({copied:false}),1500);
    })
}


  render() {
      const{name,background} = this.props;
      const {copied} = this.state;
      let copycontainer = "";
      copycontainer = (copied==true?(copycontainer= "sp-container"):"")
      let copycontainercontent = "";
      copycontainercontent = (copied==true?(copycontainercontent= "sp-content"):"")
      let copycontainercontentframe = "";
      copycontainercontentframe = (copied==true?(copycontainercontentframe= "frame-1"):"")
      let text;
      if(copied==true)
      {
          text =  <h2 class={copycontainercontentframe} style={{ background: background } } >Color copied</h2>;
      }
      else{
          text = "";
      }
      
    return (
    <CopyToClipboard text={background} 
      onCopy = {this.changeCopyState}
    >
      <div style={{ background: background } }  className='ColorBox'>
          <div className='copy-container'>
              <div className = 'box-content'>
              <div class={copycontainer}>
            	<div class={copycontainercontent}>
                  {text}
            	</div>
        </div>
       
        {/* <div className={`container${true&&copied}`}
         style = {{background}}
          aria-width="300"
           aria-height="400" >
               <p>{this.props.background}</p>
        </div> */}
        <span>{name}</span>
        </div>
        <button className='copy-button'>Copy</button>
        </div>
        
      </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;