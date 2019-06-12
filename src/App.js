import React, { Component } from 'react';
import Boxrow from './components/boxrow/boxrow';
import Header from './components/header/header';
import './App.css';
import Styledcom from './components/styledcom/styledcom';

class App extends Component{
  state={
    button1:false,
    button2:false,
    styles:{
      boxrow:{
        backgroundColor:"#inherit"
      },
      box:{
        backgroundColor:"inherit"
      }
    }

  }



  styledcsshandler = () =>{
    const button = this.state.button1;
    this.setState({button1:!button});
  }

  normalcsshandler = () =>{
    const button = !this.state.button2;
    let styles=null;
    if (button){
       styles = {
        boxrow:{
          backgroundColor:"#a773c3"
        },
        box:{
          backgroundColor:"#ffc6be"
        }
      }
    

    }
    else {
        styles={
        boxrow:{
          backgroundColor:"inherit"
        },
        box:{
          backgroundColor:"inherit"
        }
      }
    }

    this.setState({button2:button,styles:styles});


  }

  render(){
    
    console.log(this.state.styles)
    let cockpit=
    <div className="container">
      <h4 className="text-center">Parent</h4>
      <div className="border">
      <Boxrow styles={this.state.styles} />

      </div>
      
      <div className="row justify-content-center row-content">
        <div className="col-auto">
          <button className="btn btn-primary btn-lg" onClick={this.styledcsshandler} disabled={this.state.button2}>
            Using css styled component
        </button>

        </div>
        <div className="col-auto">
          <button className="btn btn-primary btn-lg" onClick={this.normalcsshandler} disabled={this.state.button1}>
            Using normal css classes
        </button>

        </div>
      </div>
    </div>
;
    if(this.state.button1){
      cockpit=<Styledcom>
      <div className="container">
        <h4 className="text-center">Parent</h4>
      <div className="border">
      <Boxrow styles={this.state.styles} />

      </div>

        <div className="row justify-content-center row-content">
          <div className="col-auto">
            <button className="btn btn-primary btn-lg" onClick={this.styledcsshandler} disabled={this.state.button2}>
              Using css styled component
          </button>

          </div>
          <div className="col-auto">
            <button className="btn btn-primary btn-lg" onClick={this.normalcsshandler} disabled={this.state.button1}>
              Using normal css classes
          </button>

          </div>
        </div>
      </div>
    </Styledcom>

    }

    return (
      <div className="body">
        <Header />
        {cockpit}
        



      </div>


    );
  }

}

export default App;
