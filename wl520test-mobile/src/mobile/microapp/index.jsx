import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Route from "./route";
import './index.less';
// import cb from "@mdf/cube/lib/cube";
// import "@mdf/cube/lib/helpers/polyfill";
import './config/axios';

const App = () => {
    // componentDidMount
    useEffect(() => {
        window.document.body.style.height = window.innerHeight + "px";
        return () => {
            window.document.body.removeAttribute("style");
        };
    }, []);
    return <Route/>;
};

ReactDom.render(<App/>, document.getElementById("container"));
