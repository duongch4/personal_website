import * as React from "react";

import { Intro } from "../../components/Intro";
import { Profile } from "../../components/Profile";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";

export const HomePage = () => (
    <div className="App">
        <Intro />
        <Profile />
        <Projects />
        <Contact />
    </div>
);