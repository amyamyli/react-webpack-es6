import React from 'react';
import Style from './slider.css';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <ul className='ul'>{
                React.Children.map(this.props.data, item => {
                  return <li onClick={this.props.handleClick}>{item}</li>;
                })
            }</ul>
            );
    }
}

export default Slider;