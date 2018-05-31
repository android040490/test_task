import axios from 'axios';

import {
    FETCH_FILMS_START,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_FAILURE,
    FETCH_FILM_BY_ID_START,
    FETCH_FILM_BY_ID_SUCCESS,
    FETCH_FILM_BY_ID_FAILURE,
    SEARCH_FILM
} from 'actionTypes';

export const changePage = index => async dispatch => {
    dispatch({ type: FETCH_FILMS_START});

    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ea53235d3cd5996cc07ef798483ee9c3&language=en-US&page=${index}`)
        .then(function (response) {
            dispatch({      
                type: FETCH_FILMS_SUCCESS,
                payload: response.data.results,
                currentPage: index
            });
        })
        .catch(function (err) {
            dispatch({
                type: FETCH_FILMS_FAILURE,
                payload: err,
                error: true
                })
      });  
};

export const fetchFilmById = id => async dispatch => {
    dispatch({type: FETCH_FILM_BY_ID_START});
    
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ea53235d3cd5996cc07ef798483ee9c3&language=en-US`)
        .then(function (response) {
            dispatch({      
                type: FETCH_FILM_BY_ID_SUCCESS,
                payload: response.data
            });
        })
        .catch(function (err) {
            console.log(err);
            dispatch({
                type: FETCH_FILM_BY_ID_FAILURE,
                payload: err,
                error: true
                });
        });
};

export const searchFilm = text => dispatch => {
    dispatch({
        type: SEARCH_FILM,
        payload: text
    });
};
