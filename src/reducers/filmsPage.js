import R from 'ramda'

import {
    FETCH_FILMS_SUCCESS,
    SEARCH_FILM
} from '../actionTypes'

const initialState = {
    ids: [],
    search: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_FILMS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case SEARCH_FILM:
            return R.merge(state, { search: payload })
        default:
            return state
    }
}