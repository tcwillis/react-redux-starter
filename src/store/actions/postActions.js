import { SET_POSTS } from './types';
import axios from 'axios';

export const setPosts = posts => dispatch => {
    dispatch({
        type: SET_POSTS,
        payload: posts
    })
}


export function fetchPosts(userName) {
    const user = userName || 'tcwillis1'
    return (dispatch) => {
        return axios.get(`/posts/@${user}/latest?format=json`, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    const jsonData = JSON.parse(response.data.substring(response.data.indexOf('>') + 1))
                    return dispatch(setPosts(jsonData.payload.references));
                }
            })
            .catch(error => {
                console.log('fetching posts failed', error);
            })
    };
}