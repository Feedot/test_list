import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GetData from "./GetData";
export default applyMiddleware(GetData, thunk);
