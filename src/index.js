import React from "react";
import ReactDOM from "react-dom";
import App from './App';
//below is one of the ways to import bootstrap:
// 1. for this one to work: yarn add bootstrap to add bootstrap to the node_modules and then import the direct file path.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(<App/>, document.getElementById("root"));


