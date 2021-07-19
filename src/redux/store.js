import {applyMiddleware, createStore} from "redux"
import { rootReducer } from "./rootReducer"

const loggerMiddleware = store => next => action => {
    let result = next(action)
    console.log("Middleware", store.getState())
    return result
}

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))







