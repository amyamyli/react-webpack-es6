import React from 'react';
import Style from './content.less';

class ContentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author:'',
            text:''
        };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTxtChange = this.handleTxtChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doAjax = this.doAjax.bind(this);
    }

    handleAuthorChange(e){
        this.setState({
            author:e.target.value
        });
    }
    handleTxtChange(e){
        this.setState({
            text:e.target.value
        });

    }

    handleSubmit(e){
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if(!text || !author){
            return;
        }
        this.doAjax({author:author,text:text});
        this.setState({
            author:'',
            text:''
        });
    }

    doAjax(data){
        const param = [{author:'Amy',text:'Hello'},{author:'Amy',text:'Hello'},{author:'Amy',text:'Hello'},{author:'Amy',text:'Hello'}];
        this.props.callBack(param); // 模拟请求回来的数据
        $.ajax({
            url:'../../../mock/mockData.json',
            dataType:'json',
            type:'GET',
            data:data,
            success:function(res){
                console.log(res);
            }.bind(this),
            failure:function(res){
                console.log(res);
            }.bind(this)
        })
    }

    componentDidMount(){
        //this.doAjax();
    }

    render(){
        return(
            <form className="content-form" onSubmit={this.handleSubmit}>
                <input 
                    className="content-input"
                    type="text" 
                    placeholder="Your name" 
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input  
                    className="content-input"
                    type="text" 
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTxtChange}
                />
                <input 
                    className="content-btn"
                    type="submit" 
                    value="Post"
                />
            </form>
            );
    }
}

class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const list = this.props.data.map((item,index) => {
            return (<li className="list" key={index}><span className="list-author">{item.author}</span> {item.text}</li>);
        })
        return (
            <div className="lists">{list}</div>
        );
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
        this.callBack = this.callBack.bind(this);
    }

    callBack(data){
        this.setState({
            data:data
        });
    }

    render(){
        return (
            <div className='content'>
                <ContentForm name="formName" callBack={this.callBack}/>
                <ContentList data={this.state.data}/>
            </div>
            );
    }
}

export default Content;