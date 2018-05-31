import React, { Component } from 'react';
import {connect} from 'react-redux'

import {searchFilm} from 'actions';

class Search extends Component {
    constructor (props){
        super(props);
        this.state = {
            value : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.debounce = this.debounce.bind(this);
    }

    search = this.debounce(this.props.searchFilm , 800);

    handleChange(event){
        let value = event.target.value;
        this.search(value);
    }

    debounce(f, ms) {
        let timer = null;
      
        return function (...args) {
            const onComplete = () => {
                f.apply(this, args);
                timer = null;
            }

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(onComplete, ms);
        };
    }

    render() {
        return (
            <div className="search-form">
                <form action="">
                    <div><label htmlFor="search">Search film</label></div>
                    <input id="search" type="text" onChange={this.handleChange} placeholder="Search"/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    searchFilm
}

export default connect(null, mapDispatchToProps)(Search);