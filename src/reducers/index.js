import { combineReducers } from 'redux';

import {
    SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedSubreddit = ( state = 'evaluation', action ) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state
    }
};

const postsBySubreddit = (state= {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state
    }
};



const posts = ( state = {
    isFetching: false,
    didInvalidate: false,
    page: 0,
    items: []
}, action) => {
    switch ( action.type ) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true,
                page: 0,
                items: []
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                page: state.page + 1,
                items: [
                    ...state.items,
                    ...action.posts
                ]
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
});

export default rootReducer