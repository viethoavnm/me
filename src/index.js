import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Register service woker to cached app.
 */
serviceWorker.register();
