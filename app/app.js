import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header.component';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
