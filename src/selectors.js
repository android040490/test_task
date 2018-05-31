import R from 'ramda';

export const getFilmsById = (state, id) => R.prop(id, state.films);

export const getFilms = state => {
    const films = R.map(id => getFilmsById(state, id), state.filmsPage.ids);
    return films;
};

export const getStringOfFields = (field, list) => {
    return R.join(', ', R.pluck(field, list));
};