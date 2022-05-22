import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/reducer";
import fetchDogAsync from "../../redux/actionCreators";
import { takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

function* watchFetchDog() {
  yield takeEvery("FETCHED_DOG", fetchDogAsync);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchDog);

export default store;
