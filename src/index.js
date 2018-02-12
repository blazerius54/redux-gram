import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Photogrid from './components/Photogrid';
import Single from './components/Single';
import { Provider } from 'react-redux';
import Store from './store';
import App from './App';
import Main from './components/Main';

const history = createBrowserHistory();

const Router2 = (
    
    <Router history={history}>
        <div>
            <Switch>
                <Provider store={Store}>
                    <div>
                        {/* <Route path='/' component={App} /> */}
                        <Route path='/' component={Main} />
                        <Route exact path='/' component={Photogrid} />
                        <Route path='/view/:postId' component={Single} />
                    </div>
                </Provider>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    Router2
, document.getElementById('root'));
registerServiceWorker();
