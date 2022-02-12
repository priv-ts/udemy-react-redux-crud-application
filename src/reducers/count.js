import { INCREMENT, DECREMENT } from '../actions'

// initial stateの定義
const initialState = { value: 0 }

// reducerの定義
export default(state = initialState, action) => {

    // 受け取ったaction typeによって分岐
    switch (action.type) {
        case INCREMENT:
            return  { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value -1 }
        // 未定義のaction type
        default:
            return state
    }
}
