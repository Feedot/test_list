import React, { Component } from 'react'
import CommentItem from '../../components/CommentItem/index'
import { connect } from 'react-redux'


class CommentList extends Component {
    constructor(){
        super();
        this.state={ field:false }

    }

    onKeyUp = e =>{

        let { data, addComment } = this.props, newId = data[data.length-1].id,
            id = ++newId, text = this.txar.value, user = true,
            empty = this.txar.value.replace(/\s/g,"");

        if((e.ctrlKey && e.keyCode === 13) && empty !== "") {
            addComment({id,text,user,img:"./images/light.png"});
            this.txar.value = ""
        }
        ((e.ctrlKey && e.keyCode === 13) && empty === "") && this.setState({field:true});

    }

    delItem = id => this.props.deleteComment(id);

    componentDidUpdate(){ this.state.field && setTimeout( () => this.setState({ field : false }), 3000 ) }

    render(){
        const { data } = this.props, {onKeyUp, delItem, state } = this;
        return(
            <div>
                <h1>Comments #2</h1>
                {data.map((data,key) => <CommentItem {...{data,key,delItem}}/>)}
                <form className="add_comment">
                    <div>
                        <img src="images/light.png"/>
                    </div>
                    <textarea ref={txar => this.txar = txar} {...{onKeyUp}}/>
                    <p className={ state.field ? "active": null}>Field is empty</p>
                </form>
            </div>
        )
    }
}

export default connect(
    state=>({
        state:state,
        data: state.comments
    }),
    dispatch=>({
        addComment: payload => dispatch({ type:"ADD_COMMENT", payload }),
        deleteComment: payload => dispatch({ type:"DELETE_COMMENT", payload })
    })
)(CommentList)