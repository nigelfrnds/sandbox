import React from 'react';
import './styles/App.css';

import SmallImage from './assets/images/small.jpg';
import LargeImage from './assets/images/large.jpg';

const App = () => (
  <div>
    React test
    <div>
      <h3>Large image (Uncompressed)</h3>
      <img src={LargeImage} />
      <br />
      <h3>Small image (Compressed)</h3>
      <img src={SmallImage} />
    </div>
  </div>
);

export default App;