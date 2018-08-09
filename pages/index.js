import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Article from './article.js';
import img from './images/photo01.jpg';
import registerServiceWorker from './registerServiceWorker';



let urls = [
  require('./images/photo01.jpg'),
  require('./images/photo02.jpg'),
  require('./images/photo03.jpg'),
  require('./images/photo04.jpg'),
  require('./images/photo05.jpg'),
  require('./images/photo06.jpg'),
  require('./images/photo07.jpg'),
  require('./images/photo08.jpg'),
  require('./images/photo09.jpg'),
  require('./images/photo10.jpg')
];



ReactDOM.render(<Article imageUrls={urls} />, document.getElementById('root'));
registerServiceWorker();
