/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// THUNK
import thunk from 'redux-thunk';

// COMPONENTS
import App from './components/App';

// REDUCERS
import reducers from './reducers';

// first import thunk and middleware fn and pass it to createStore, works for ALL MIDDLEWARE

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root'),
);
