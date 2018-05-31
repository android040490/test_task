import React, { Component } from 'react';

class ButtonPagination extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);

    }
    
    handleClick(){
        this.props.handleClick(this.props.data)
    }
    render() {
        return (
            <div className={this.props.className}>
                <div 
                className="btn btn-primary"
                onClick={this.handleClick}
                >{this.props.title}</div>
            </div>
        );
    }
}

export default ButtonPagination;