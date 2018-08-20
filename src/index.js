import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
