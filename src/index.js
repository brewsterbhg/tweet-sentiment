import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import RenderMap from "./components/RenderMap";

ReactDOM.render(<RenderMap />, document.getElementById("root"));

serviceWorker.unregister();
