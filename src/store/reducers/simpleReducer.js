
import { SIMPLE_ACTION } from '../actionsTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case SIMPLE_ACTION:
            return {
                result: action.payload
            }
        default:
            return state
    }
}