import * as React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";

import { Header } from "../components/Header";

import { HomePage } from "./home/HomePage";
import { NotFoundPage } from "./notfound/NotFoundPage";

export const MainRoutes = () => (
    <div id="main-routes">
        <Header />
        <Switch>
            <Route exact path={`/`} component={HomePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);
