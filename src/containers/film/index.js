import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import R from 'ramda';

import {fetchFilmById} from 'actions'
import {getFilmsById} from 'selectors'

class Film extends Component {
    componentDidMount() {
        
        this.props.fetchFilmById(this.props.params.id)
    }
    
    renderFilm(){
        const {film} = this.props
        console.log('film', film)
        return (
            <div className="row film-details">
                <div className="col-sm-4 film-details__img">
                    <img className='img-thumbnail' src={` https://image.tmdb.org/t/p/original${film.poster_path}`} alt="" />
                </div>
                <div className="col-sm-8 film-details__details">
                    <div>
                        <h3>{film.title}</h3>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        <p>{film.overview}</p>
                    </div>
                </div>
            </div>
            
        )
    }
    render() {
        const {film} = this.props
        return (
            <div className='wrapper'>
                {film && (film.id == this.props.params.id) && this.renderFilm()}
                <div><Link to='/' className='btn btn-primary'>Return to the list</Link></div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchFilmById
}
const mapStateToProps = (state) => ({
    film : state.filmDetails
    // film : getFilmsById(state, state.filmDetails.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Film);