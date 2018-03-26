import axios from "axios";

export default ({ dispatch }) => next => ({ type, payload }) => {
    (type === "TAKE_DATA") ?
        axios.get("data.json").then(({ data }) =>  dispatch({ type: "GET_DATA", payload: data }) ):
        next({ type, payload });
};