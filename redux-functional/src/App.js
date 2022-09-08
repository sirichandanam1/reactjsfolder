// import logo from './logo.svg';
import React, { Component } from "react";
import {connect} from 'react-redux';
import './App.css';
function App(props) {
 const increment = () => {
    //increment action
    props.dispatch({
      type:"INCREMENT",
    });
  };
const  decrement = () => {
    //decrement action
    props.dispatch({
      type:"DECREMENT",
    });
  };
  
  return (
    <div className="App">
     
     <center>
          <h1 className="mt-5 dislay-1">{props.count}</h1> 
         <button onClick={increment} className="btn btn-info mr-5">Increment</button>
        <span style={{ padding: 5}}></span>
        <button onClick={decrement} className="btn btn-primary">
          Decrement
        </button>
        </center>
      </div>
    );
  }

const mapStateToProps = (state) => {
  //to access state mapState through access any component
  return{
    count: state.count,
  };
};
export default connect(mapStateToProps)(App);

