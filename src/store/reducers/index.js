import {combineReducers} from "redux"
import auth from "./auth"
import restaurentList from "./restaurentList"

export default combineReducers({
    auth,
    restaurentList
})