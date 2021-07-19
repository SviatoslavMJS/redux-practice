import {combineReducers} from "redux"
import { countReducer1 } from "./countReducer1"
import { countReducer2 } from "./countReducer2"

export const rootReducer = combineReducers({count1: countReducer1, count2: countReducer2})