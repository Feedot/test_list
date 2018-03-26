import React, { Component } from 'react'
import Item from '../../components/Item/index'
import { connect } from 'react-redux'

import './styles.css'

class ItemsList extends Component {
    constructor(){
        super();
        this.state = { name:false, active: 1}
    }

    deleteItem = id => this.props.deleteItem(id);

    toogleItem = key => this.setState({active:key});

    onSubmit = e => {

        let {data, addNewItem } = this.props, newId = data[data.length-1].id,
            id = ++newId, name = this.input.value,
            sameItem = data.reduce(( res, { name }) => res = (name === this.input.value ) && !res, false );

        if(sameItem) this.setState({name:true});
        else{
            addNewItem({ id, name, number:1 });
            this.input.value = ""
        }

        e.preventDefault()

    }

    componentWillMount() {
        const {takeAsyncData,takeStorageData} =  this.props;
        !localStorage.getItem('items') ? takeAsyncData() : takeStorageData();
    }

    componentDidUpdate(){ this.state.name && setTimeout( () => this.setState({ name:false }), 3000 ) }

    render(){
        let { deleteItem, onSubmit, state, toogleItem } = this, { data } = this.props;

        return(
            <div>
                <h1>Items</h1>
                <form {...{ className:"add_form",onSubmit }}>
                    <input ref={ input => this.input = input}
                           placeholder= "Type name here..."
                           required/>
                    <button type="submit">Add new</button>
                    <p className={ state.name ? 'active': null }>This item has already existed</p>
                </form>
                { data.length && data.map((data,key) =>
                    <Item {...{ key, num:key, data, toogleItem, deleteItem,
                        active: (key === this.state.active) && true || false }}/> )}
            </div>
        )
    }
}
export default connect(
    state => ({
        state: state,
        data: state.items
    }),
    dispatch=>({

        takeAsyncData: () => dispatch({ type: "TAKE_DATA" }),
        takeStorageData:()=> dispatch({ type: "STORAGE_DATA" }),
        addNewItem: payload => dispatch ({ type:"ADD_ITEM", payload }),
        deleteItem: payload => dispatch({type:"DELETE_ITEM", payload })

    })
    )(ItemsList)

