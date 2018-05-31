import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {fetchFilmById, changePage} from 'actions';
import {getFilmsById , getStringOfFields} from 'selectors';
import Sidebar from 'components/sidebar';

class Film extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        this.props.fetchFilmById(this.props.params.id);
    }
    
    handleClick(){
        console.log('click');
        this.props.changePage(this.props.currentPage);
    }

    renderFilm(){
        const {film} = this.props
        console.log('film', film)
        return (
            <div className="row m-0 film-details">
                <div className="col-sm-4 film-details__img">
                    <img className='img-thumbnail' src={` https://image.tmdb.org/t/p/original${film.poster_path}`} alt="{film.title}" />
                </div>
                <div className="col-sm-8 film-details__description">
                    <div>
                        <h3 className='film-details__title'>{film.title}<span>({new Date(film.release_date).getFullYear()})</span></h3>
                    </div>
                    <div>
                        <p><strong>Release date:</strong> <span>{new Date(film.release_date).toLocaleDateString()}</span></p>
                        <p><strong>Original language: </strong><span>{film.original_language}</span></p>
                        <p><strong>Production companies: </strong>{getStringOfFields('name', film.production_companies)}</p>
                        <p><strong>Production countries: </strong>{getStringOfFields('name', film.production_countries)}</p>
                        <p><strong>Genre: </strong>{getStringOfFields('name', film.genres)}</p>
                        <p><strong>Budget: </strong>{film.budget} $</p>
                        <p><strong>Revenue: </strong>{film.revenue} $</p>
                        <p><strong>Runtime: </strong>{film.runtime} m</p>
                        <h5>Overview:</h5>
                        <p>{film.overview}</p>
                    </div>
                </div>
            </div>
            
        );
    };

    render() {
        const {film} = this.props;
        return (
            <div className='wrapper pt-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-3'>
                            <Sidebar >
                                <Link to='/' onClick={this.handleClick} className='btn btn-primary'> &lt; Return to the list</Link>
                            </Sidebar>
                        </div>
                        <div className='col-12 col-lg-9 '>
                            {film && (film.id == this.props.params.id) && this.renderFilm()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = {
    fetchFilmById,
    changePage
};

const mapStateToProps = (state) => ({
    film : state.filmDetails,
    currentPage : state.filmsPage.currentPage
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);