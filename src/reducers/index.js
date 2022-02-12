import { combineReducers } from "redux";
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz })    // 複数のreducerを指定する場合
