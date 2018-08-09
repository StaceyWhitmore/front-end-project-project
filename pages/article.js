import React, {Component} from 'react';
import PropTypes from 'prop-types';
import img from './images/photo01.jpg';
//import ThumbNail from './ThumbNail';
//import './loaderAnimation.css';
//import './style.css';

/****************************Search the gallery Element for any <img> children.
Using the HTMLImageElement.complete' */
function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }

}/*Because this function isn't dependent on anything else in the component(s)
(i.e. no references to this), it is defined outside of the component classses.********************/


/*******************************************/

class Article extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.this;
    //clicked null '' or  'false'
    this.state = {

      loading: true,
      clicked: ''
    };
  }//close constructor

  //EVENT.TARGET


  /*Wite a HOC that the child thumbs can be passed to to subsribe them to
  clicke event handler/listeners */
  handleClick(event, i) {
    /*BIND HERE INSTEAD*/
    //if (this.state.clicked === true) alert('className is ' + event.typeOf);//undefined
    let ref = this.refs.ref;
    console.log('ref is ', ref);
  //console.log('forewarded ref is ', this.forwardedRef.displayName);
    console.log('state is ', this.state);
    //var refArray  = this.refs.toArray();
    //console.log('refArray', refArray);
      //alert("event Type: " + eventType + " index: " + i + " event: " + e);

  } //close handleClick()

  //was handleStateChange--Takes element as arg. Returns T if all its img children have loaded.
 //loading is then set to 'false' bc they are no longer loading.
  handleImageChange = () => {
    this.setState({
      loading:!imagesLoaded(this.galleryElement)
    });
  };
//loaderAnimation is contained in the CSS file under loaderAnimation class

/*
renderLoaderAnimation() {
  if (!this.state.loading) {
    return null; //..then don't render anything
  }
  return (
    <span className="loaderAnimation" />
  );
}
*/

  /*RENDER EXPANDED IMAGE*/
 renderExpandedImage(imageUrl, index) {
   //let src="" imageUrls

   return (
  <div className="expandedImage">

     <div style={{textAlign:'left'}}>
       <p>Sub Title</p>
       <h2>Title of the Section</h2>
     </div>
     <img

        className="expandedImage"
        alt=""
        />
  </div>
   )

 }

  //pass in index attribute later
  //alt={'photo 0' + index + 1}
  renderImage(imageUrl, index) {
    //console.log('imageUrl is ' + imageUrl + " index is " + index);
    //if(index == 0)
    return (
      <div id={index} className ="column" key={imageUrl.toString()}>
        <img
             src={imageUrl}
             onLoad={this.handleImageChange}
             onError={this.handleImageChange}
             onClick={this.handleClick.bind(this)}
             style={{width:'100%'}}
             />
      </div>
    );
  }//close renderImage()




//pass f(x) to ref to get the gallery Element
/*          {this.renderLoaderAnimation()}   after first div*/
render() {
  return (
    <div className = "gallery" ref={element => {this.galleryElement = element;}}>
      <div className="container">
          {this.props.imageUrls.map((imageUrl) => this.renderImage(imageUrl),this)}
      </div>

    </div>
  );


} //close render()

/*Removed from render():
{this.props.imageUrls.map((imageUrl) => this.renderExpandedImage(imageUrl)}
also,
onLoad prop removed from container div
*/

} /*close Gallery Comp*********************************************************/

//where the image urls passed to the Gallery Component are received:

Article.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Article
