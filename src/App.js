import React, { Component } from 'react';
import { Route, Switch,Link} from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import HomePage from './HomePage';

class App extends Component {
      constructor(props)
      {
        super(props);
        this.state = { ind:7 };
     
        this.renderPalette =this.renderPalette.bind(this);
      }
      renderPalette(i)
      {
        console.log("called i:- "+i);
        this.setState({ind : i});
      }

  render(){
 
      return (
      <div className = 'App'>
      <Navbar/>
     
     
   <Switch>
     <Route
          exact
          path='/palette/:i'
          render={routeProps => <Palette {...seedColors[this.state.ind]}/>}
        />
         <Route
          exact
          path='/'
          render={() =><HomePage render = {this.renderPalette}/>}
        />
        </Switch>
      
      {/* {this.state.ind<9&& <Palette {...seedColors[this.state.ind]}/>} */}
       
     {/* {/* // <Palette {...seedColors[4]}/>  */}
  
     </div>
  );
  }
}

export default App;
