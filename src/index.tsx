import React from "react";
import ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    withRouter as _withRouter,
} from "react-router-dom";

import { ScrollToTop } from "./components/scroll_to_top/ScrollToTop";
import { MainRoutes } from "./pages/MainRoutes";
import { Footer } from "./components/footer/Footer";

import { disableConsoleWindowIfNotSupported } from "./utils/NoConsoleSupport";
import { loadServiceWorker } from "./serviceworker/LoadingServiceWorker";

disableConsoleWindowIfNotSupported();
loadServiceWorker();

const rootElem = document.getElementById("root");
let render = () => {
    ReactDOM.render(
        <Router>
            <ScrollToTop />
            <MainRoutes />
            <Footer />
        </Router>
        ,
        rootElem
    );
};

if (module.hot) {
    const renderApp = render;
    const renderErr = (err: Error) => {
        const RedBox = require("redbox-react").default;
        ReactDOM.render(
            <RedBox error={err} />,
            rootElem
        );
    };
    render = () => {
        try {
            renderApp();
        }
        catch (error) {
            const log = require("./utils/Log").default;
            log.error(error, "In Render React-Redbox");
            renderErr(error);
        }
    };

    module.hot.accept("./index", () => render());
}

render();
