import React from 'react';
import Style from './head.less';
class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className='head' >react + webpack + es6 demo <span>{this.props.name}</span></div>
            );
    }
}

export default Head;