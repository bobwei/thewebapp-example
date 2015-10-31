import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';
import App from './Main';

const store = createStore(rootReducer, {
  postList: [{
    text: '賴清德拒赴議會　公懲會申誡處分'
  }, {
    text: '新北欠北市補貼款8千萬 柯P：再不還，就告他！'
  }]
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
