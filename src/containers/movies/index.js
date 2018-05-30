import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import R from 'ramda'
import {bindActionCreators} from 'redux'

import {fetchFilms} from 'actions';
import {getFilms} from 'selectors'

class Movies extends Component {
    componentDidMount() {
        this.props.fetchFilms()
    }

    renderFilms (film, index) {
        const shortDescription = `${R.take(150, film.overview)}...`
        return (
            <div className='col-sm-12 col-lg-6 pb-2' key={index}>
                <div className='container-film row'>
                    <div className='col-5 p-0 container-film__img'><img className='img-fluid' src={` https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt="phone.title"/></div>
                    <div className='col-7 container-film__description'>
                        <div className='container-film__about'>
                            <Link to={`/films/${film.id}`} className='container-film__title'>{film.title}</Link>
                            <p className='container-film__overview'>{shortDescription}</p>
                        </div>
                       <div className='container-film__btn'><Link to={`/films/${film.id}`} className='btn btn-primary'>More info</Link></div>
                    </div>
                </div>
                
            </div>
        )
    }
    
    

    render() {
        const films = this.props.films
        const searchString = this.props.filmsPage.search
        const applySearch = item => R.contains( searchString.toLowerCase() , R.prop('title', item).toLowerCase())
        const filterFilms = R.filter( applySearch, films )
        return (
            <div className=''>
                <div className="row">
                    {filterFilms.map((film, index) => this.renderFilms(film, index))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    films: getFilms(state),
    filmsPage: state.filmsPage
})

const mapDispatchToProps = { 
    fetchFilms
}

export default connect( mapStateToProps , mapDispatchToProps)(Movies);