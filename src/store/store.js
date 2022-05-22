import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoSlice from "../features/todo/todoSlice";
import saga from "../saga/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
