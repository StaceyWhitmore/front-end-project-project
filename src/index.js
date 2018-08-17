import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Gallery from './Gallery';
import './css/style.css';


let imageUrl = [
require('./images/photo01.jpg'),
require('./images/photo02.jpg'),
require('./images/photo03.jpg'),
require('./images/photo04.jpg'),
require('./images/photo05.jpg'),
require('./images/photo06.jpg'),
require('./images/photo07.jpg')
];


var bodyStyle = {
  margin:'100px'
}


ReactDOM.render(

  <Gallery imageUrls={imageUrl} style={bodyStyle}/>,
   document.getElementById('root'));
registerServiceWorker();
