import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";

import { createApi } from "./api";
import createList from "./list/configure";
import reducer from "./reducer";

import App from "./App.jsx";

const withMiddleware = applyMiddleware(thunk, reduxPromise);
const store = withMiddleware(createStore)(reducer);

const api = createApi(fetch);

const List = createList(api);

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(React.createElement(App, { store, List }), root);
