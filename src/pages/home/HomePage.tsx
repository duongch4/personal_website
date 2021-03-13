import * as React from "react";

import { Intro } from "../../components/intro/Intro";
import { Profile } from "../../components/profile/Profile";
import { Projects } from "../../components/projects/Projects";
import { Contact } from "../../components/contact/Contact";

export const HomePage = () => (
    <div className="container-fluid container-main">
        <Intro />
        <Profile />
        <Projects />
        <Contact />
    </div>
);
