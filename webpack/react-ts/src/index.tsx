import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App title="Typescript React test" />,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  //@ts-ignore
  module.hot.accept();
}
