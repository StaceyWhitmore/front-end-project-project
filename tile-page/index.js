import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tile />, document.getElementById('root'));
registerServiceWorker();
