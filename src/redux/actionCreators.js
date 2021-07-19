export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_NUMBER = "ADD_NUMBER"
export const SUB_NUMBER = "SUB_NUMBER"

export function addAC() {
    return {
        type: INCREMENT
    }
}

export function subtractAC() {
    return {
        type: DECREMENT
    }
}

export function addNumberAC(payload) {
    return {
        type: ADD_NUMBER,
        payload
    }
}

export function subNumberAC(payload) {
    return {
        type: SUB_NUMBER,
        payload
    }
}

