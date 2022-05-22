import { createStore } from "redux";
import reducer from "../reducer/reducer";

// Store
const store = createStore(reducer);

export default store;
