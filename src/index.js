import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/normalize.css";
import { Provider } from "react-redux";
import store from "./store";



// const RouterObject = createBrowserRouter(RouterInfo) 
//CreateBrowserRouter로 경로 지정


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <App />
  </Provider>,
);