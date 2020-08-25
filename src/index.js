import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import Inside from './views/Inside';
import PinModal from './views/PinModal';

const rootElement = document.getElementById('root');
const customHistory = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={customHistory}>
        <Route
            component={({ history }) => {
                // reconcile React Router history by making it available globally in the 3D menu
                window.appHistory = history;
                return <Home />;
            }}
        />
        <Route path="/inside" component={Inside} />
        <Route path="/inside/pin1" render={() => <PinModal text="1" />} />
        <Route path="/inside/pin2" render={() => <PinModal text="2" />} />
        <Route path="/inside/pin3" render={() => <PinModal text="3" />} />
    </HashRouter>,
    rootElement
);
