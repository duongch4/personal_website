import * as React from "react";

import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Home } from "../../components/Home";
import { NavigationBar } from "../../components/NavigationBar";
import { Profile } from "../../components/Profile";
import { Projects } from "../../components/Projects";

export class IntroPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="App">

                <NavigationBar />

                <Home />
                <Profile />
                <Projects />
                <Contact />

                <Footer />

            </div>
        );
    }
}
