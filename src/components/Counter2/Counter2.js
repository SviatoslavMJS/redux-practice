import { classes } from "istanbul-lib-coverage"
import React, { Component } from "react"
import { connect } from "react-redux"
import { addNumberAC, asyncAddNumberAC, subNumberAC } from "../../redux/actionCreators"

class Counter2 extends Component {
    render() {
     
        return (
            <div className={classes.Counter2}>
                <h1>{this.props.counter2}</h1>
                <hr />
                <div>
                    <button onClick={() => this.props.add(100)}>Increment on 100</button>
                    <button onClick={() => this.props.sub(75)}>Decrement on 75</button>
                    <hr/>
                    <button onClick={() => this.props.async(66)}>Async Add 66</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        counter2: state.count2.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (number) => dispatch(addNumberAC(number)),
        sub: (number) => dispatch(subNumberAC(number)),
        async: (number) => dispatch(asyncAddNumberAC(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter2)