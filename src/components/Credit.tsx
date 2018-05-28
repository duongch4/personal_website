import * as React from 'react';
import typescriptIcon from '../images/typescript.svg';
import '../stylesheets/Credit.css';

class Credit extends React.Component {
    public render() {
        return (
            <div id="credit" className="container">
                <div className="row header"><h2>Credit</h2></div>
                <div className="credit-text"><img src={typescriptIcon} className="typescript-icon" alt="TypeScriptIcon" /> icon is made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        );
    }
}

export default Credit;