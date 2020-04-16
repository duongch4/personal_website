import * as React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";

import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { HomePage } from "./home/HomePage";

export const MainRoutes = () => (
    <div id="main-routes">
        <Header />
        <Switch>
            <Route path={`/`} component={HomePage} />
        </Switch>
        <Contact />
        <Footer />
    </div>
);
