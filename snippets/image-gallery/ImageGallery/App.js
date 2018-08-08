import React from 'react';
import ReactDom from 'react-dom';
import Gallery from './Gallery';

class App extends Component {

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

  render() { (
    <Gallery imageUrls={urls}>

    </Gallery >
  )}

}

export default App
