import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PublicRouter from 'src/router/PublicRouter';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import 'src/assets/css/common.css';

const middleware = [ thunk ];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <PublicRouter />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
