///*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDom from 'react-dom';
import Head from './head/head';
import Slider from './slider/slider';
import Content from './content/content';
import Foot from './foot/foot';
import Style from '../css/index';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:'',
            subTitle:'learn react'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            data:['list1','list2','list3','list4','list5']
        });
    }

    handleClick(e){
        console.log(e.target)
        const subTitle = e.target;
        console.log(subTitle,3331);
        this.setState({
            subTitle : `${subTitle.innerText}` || 'error'
        });
    }

    render(){
        return(
            <div>
                <Head name={this.state.subTitle}></Head>
                <div className = 'center-content'>
                    <Slider data={this.state.data} handleClick={this.handleClick}></Slider>
                    <Content></Content>
                </div>
                <Foot></Foot>
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('react')
);