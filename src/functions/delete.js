export default (state,items,payload) => {

    state[items] = state[items].reduce((arr, item)=>{
        (item.id !== payload) && arr.push(item)
        return arr
    },[])

    state[items].map( (item,index) => item.id = index )
    localStorage.setItem(items,JSON.stringify(state[items]))

}