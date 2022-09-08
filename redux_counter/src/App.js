
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import {connect} from 'react-redux';
export class App extends Component {
  increment = () => {
    //increment action
    this.props.dispatch({
      type:"INCREMENT",
    });
  };
  decrement = () => {
    //decrement action
    this.props.dispatch({
      type:"DECREMENT",
    });
  };
  render() {
    return (
      <div>
        <center>
          <h1 className="mt-5 dislay-1">{this.props.count}</h1> 
         <button onClick={this.increment} className="btn btn-info mr-5">Increment</button>
        <span style={{ padding: 5}}></span>
        <button onClick={this.decrement} className="btn btn-primary">
          Decrement
        </button>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //to access state mapState through access any component
  return{
    count: state.count,
  };
};
export default connect(mapStateToProps)(App);
