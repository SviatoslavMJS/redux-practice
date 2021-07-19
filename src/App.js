import React, { Component } from "react"
import './App.module.css';
import { connect } from "react-redux"
import { addAC, subtractAC } from "./redux/actionCreators";
import Counter2 from "./components/Counter2/Counter2";

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <h1>{ this.props.counter }</h1>
        <hr />
        <div>
          <button onClick={() => this.props.add()}>Increment</button>
          <button onClick={() => this.props.subtract()}>Decrement</button>
        </div>

        <hr/>

        <Counter2 />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.count1.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     add: () => dispatch(addAC()),
     subtract: () => dispatch(subtractAC())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
