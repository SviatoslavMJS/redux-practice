import { DECREMENT, INCREMENT } from "./actionCreators.js";

const initialState = {
    counter: 200
}


export function countReducer1(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 }

        case DECREMENT:
            return { counter: state.counter - 1 }

        default:
            return state
    }
}