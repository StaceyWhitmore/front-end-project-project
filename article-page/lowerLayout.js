import React, { Component } from 'react';
//import React, { PureComponent } from 'react';
//import './css/style.css'
import './css/lowerLayout.css';

class SubHeading extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    //console.log("Rendering: SubHeading");

    var subHeadingStyle = {
      gridArea: 'subHeading',
      position: 'relative',
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

class Video extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
render() {
  //console.log("Rendering: Video");
  var videoStyle = {
    gridArea: 'video',
    positon: 'relative',
    pading: '0px',
    border: '5px'
    //float: 'right'
  }


  return(
    <div className="box video" style={videoStyle}>
      <iframe
      title="OneMoreDay"
        style={videoStyle}
        width="325"
        height="182.8125 "
        src="https://www.youtube-nocookie.com/embed/Z3yF6uIu9sM?rel=0"
        frameBorder="0"
        allow="autoplay;encrypted-media"
        allowFullScreen>
     </iframe>
    </div>
  );
}//cloes render()

}//close <Video />


class Wrapper extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    //console.log("Rendering: Wrapper");
     /*
      var lowerLayoutStyle = {
        fontFamily: 'Open Sans',
        boxSizing: 'borderBox',
        margin: '100px'
      }
      */
      var wrapperStyle = {

          display: 'grid',
          gridGap: '5px', /*was 10px*/
          paddingLeft: '45px',
          gridTemplateColumns: '25% 25% 25% 25%',

          gridTemplateAreas:`
           'paragraph paragraph paragraph indentTop'
           'paragraph2 paragraph2 video video'
           'paragraph3 paragraph3 paragraph3 indentBottom'
           'subHeading  subHeading  subHeading indentBottom'`,

          backgroundColor: 'white',
          color: '#444'
      }




    return(
    <div>
      <div className="wrapper" style={wrapperStyle}>
          <div className="box indent-top"></div>

          <div className="box paragraph"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus.
            </p>
          </div>
          <div className="box paragraph2"><p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.
             Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.
             Cras mattis consectetur purus sit amet fermentum.  Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
             eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
             <br/><br/>
             Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
             </p></div>
              <Video />
          <div className="box paragraph3"><p>Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere
            erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          </div>
          <div className="box indent-bottom"></div>
            <SubHeading />
      </div>
    </div>
    );
  }//close render()

}// close

export default Wrapper;
