import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="box header"></div>
      </div>
    )
  }
}//close <Header />

class SubHeading extends React.Component {
  render() {
    var subHeadingStyle = {
      gridArea: 'subHeading',
      position: 'relative'
    }

    return(
      <div className="box subHeading" style={subHeadingStyle}>
        <h2>Sub-heading</h2>
        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          <br/><br/> Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Maecenas faucibus mollis
          interdum.
        </p>
      </div>
    )
  }
}

class Video extends React.Component {
render() {
  var videoStyle = {
    gridArea: 'video',
    positon: 'relative'
  }


  return(
    <div className="box video" >
      <iframe
      title="OneMoreDay"
        style={videoStyle}
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Z3yF6uIu9sM?rel=0"
        frameBorder="0"
        allow="autoplay;encrypted-media"
        allowFullScreen>
     </iframe>
    </div>
  );
}//cloes render()

}//close <Video />


class Wrapper extends React.Component {

  render() {
      var wrapperStyle = {

          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: '25% 25% 25% 25%',

          gridTemplateAreas:`
           'header header header header'
           'paragraph paragraph paragraph indentTop'
           'paragraph2 paragraph2 video video'
           'paragraph3 paragraph3 paragraph3 indent-bottom'
           'subHeading  subHeading  subHeading indentBottom'`,

          backgroundColor: 'white',
          color: '#444'

      }


    return(
    <div>
      <Header />
      <div className="wrapper" style={wrapperStyle}>
          <div className="box indent-top"></div>

          <div className="box paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet.
          </div>
          <div className="box paragraph2">
            Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</div>
            <Video />
          <div className="box paragraph3">Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere
            erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
          <div className="box indent-bottom"></div>
            <SubHeading />
        </div>
      </div>
    );
  }//close render()

}// close <Wrapper />

export default Wrapper;
