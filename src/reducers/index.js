import { combineReducers } from "redux";
import events from './events'

export default combineReducers({ events })
// export default combineReducers({ foo, bar, baz })    // 複数のreducerを指定する場合
