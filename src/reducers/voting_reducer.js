import {
    FETCH_VENUES,
    ERROR_VENUES,
    LOADING
} from '../actions/types';

const INITIAL_STATE = {
    venues: [],
    loading: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VENUES:
            return {
                ...state,
                venues: action.payload,
                    loading: false
            };
        case ERROR_VENUES:
            return {
                ...state,
                error: action.payload,
                    loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true,
                    error: false
            };
        default:
    }
    return state;
}