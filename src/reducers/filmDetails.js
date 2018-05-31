import R from 'ramda';

import {
    FETCH_FILM_BY_ID_SUCCESS
} from 'actionTypes';


const initialState = {
};

export default (state = initialState, { type, payload}) => {
    switch (type) {
        case FETCH_FILM_BY_ID_SUCCESS:
            return R.merge(state, payload);
    
        default:
            return state;
    }
    
}
