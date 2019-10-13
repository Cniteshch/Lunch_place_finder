import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import theme from "../assets/react-toolbox/theme.js";
import VotingPage from "./containers/votingContainer";
import "../assets/react-toolbox/theme.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, applyMiddleware(reduxThunk));
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter path="/">
        <Route path="/" component={VotingPage} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  rootElement
);
