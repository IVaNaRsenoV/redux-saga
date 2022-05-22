import React from "react";
import { connect } from "react-redux";
import Main from "./pages/Main";

const App = (props) => {
  return (
    <Main
      loading={props.loading}
      error={props.error}
      url={props.url}
      dispatch={props.dispatch}
    />
  );
};

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

export default ConnectedApp;
