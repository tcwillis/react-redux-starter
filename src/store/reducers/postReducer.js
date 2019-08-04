
import { SET_POSTS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}