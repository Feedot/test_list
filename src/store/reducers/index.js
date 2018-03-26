import add from "../../functions/add";
import del from "../../functions/delete";
const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      localStorage.setItem("items", JSON.stringify(payload.items));
      localStorage.setItem("comments", JSON.stringify(payload.comments));
      state.items = payload.items;
      state.comments = payload.comments;
      break;

    case "STORAGE_DATA":
      state.items = JSON.parse(localStorage.getItem("items"));
      state.comments = JSON.parse(localStorage.getItem("comments"));
      break;

    case "ADD_ITEM":
      add(state, "items", payload);
      break;
    case "DELETE_ITEM":
      del(state, "items", payload);
      break;
    case "ADD_COMMENT":
      add(state, "comments", payload);
      break;
    case "DELETE_COMMENT":
      del(state, "comments", payload);
      break;
  }

  return { ...state };
};
