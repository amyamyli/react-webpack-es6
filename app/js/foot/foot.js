import React from 'react';
import Style from './foot.less';

class Foot extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div><div className = 'foot'>foot</div><div>addtest</div></div>
            );
    }
}

export default Foot;