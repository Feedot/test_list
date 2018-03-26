import React from 'react'
const Item = props => {
    const { data,deleteItem,active,toogleItem,num } = props, { id,name,number } = data;
    return(
        <div onClick={ () => toogleItem(num) }
             className={ active ? "item_wrapper active" : "item_wrapper" }>
            <p>{ name }<span>{ number }</span></p>
            <button onClick={ () => deleteItem(id) }>Delete</button>
        </div>
    )
}


export default Item;