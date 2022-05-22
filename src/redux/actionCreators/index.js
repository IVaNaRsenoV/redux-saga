import { put, call } from "redux-saga/effects";

const requestDog = () => {
  return { type: "REQUESTED_DOG" };
};

const requestDogSuccess = (data) => {
  return { type: "REQUESTED_DOG_SUCCEEDED", url: data.message };
};

const requestDogError = () => {
  return { type: "REQUESTED_DOG_FAILED" };
};

export default function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}
