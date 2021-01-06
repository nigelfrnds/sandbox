import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
