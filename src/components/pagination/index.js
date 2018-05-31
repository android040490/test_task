import React, { Component } from 'react';
import {connect} from 'react-redux';

import ButtonPagination from './btn-pagination';
import {changePage} from 'actions';


class Pagination extends Component {
    constructor(props){
        super(props)

        this.onChangePage = this.onChangePage.bind(this);
    }

    value = this.props.currentPage;

    onChangePage(index){
        
        if (!(this.value == 1 && index == -1)){
            this.value += index;
            this.props.changePage(this.value);     
        }
    }

    render() {
        return (
            <div className="pagination"> 
                <ButtonPagination className="pagination__btn" title="<Back" data={-1} handleClick={this.onChangePage}/>
                <ButtonPagination className="pagination__btn" title="Next>" data={+1} handleClick={this.onChangePage}/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    changePage
}

const mapStateToProps = (state) =>({
    currentPage: state.filmsPage.currentPage
})


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);