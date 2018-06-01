import React, { Component } from 'react';
import {connect} from 'react-redux';

import {changePage} from 'actions';


class Pagination extends Component {
    constructor(props){
        super(props)

        this.onChangePage = this.onChangePage.bind(this);
    };

    value = this.props.currentPage;

    onChangePage(event){
        let index = +event.target.getAttribute('data');
        if (!(this.value == 1 && index == -1)){
            this.value += index;
            this.props.changePage(this.value);     
        };
    };

    render() {
        return (
            <div className="pagination"> 
                <button className="btn btn-primary pagination__btn"  data={-1} onClick={this.onChangePage}>&lt; Prev</button>
                <button className="btn btn-primary pagination__btn"  data={1} onClick={this.onChangePage}>Next &gt;</button>
            </div>
        );
    };
};

const mapDispatchToProps = {
    changePage
};

const mapStateToProps = (state) =>({
    currentPage: state.filmsPage.currentPage
});


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);