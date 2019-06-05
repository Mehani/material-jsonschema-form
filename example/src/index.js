import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'material-json-schema';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);