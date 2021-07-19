import { ADD_NUMBER, SUB_NUMBER } from "./actionCreators.js";

const initialState = {
    counter: 30
}


export function countReducer2(state = initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { counter: state.counter + action.payload }

        case SUB_NUMBER:
            return { counter: state.counter - action.payload }

        default:
            return state
    }
}