import React, {Component} from 'react';
import PropTypes from 'prop-types';
import img from '../images/photo01.jpg';

function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }

}


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
   //was handleStateChange
  handleImageChange = () => {
    this.setState({
      loading:!imagesLoaded(this.galleryElement)
    });
  };

renderSpinner() {
  if (!this.state.loading) {
    return null; //..then don't render anything
  }
  return (
    <span className="spinner" />
  );
}

  renderImage(imageUrl) {
    return (
      <div key={imageUrl.toString()}>
        <img

             src={imageUrl}
             onLoad={this.handleImageChange}
             onError={this.handleImageChange}
             alt="thumb"
             />
      </div>
    );
  }//close renderImage()

render() {
  return (
    <div
          className = "gallery"
          ref={element => {
          this.galleryElement = element;
        }}>
      {this.renderSpinner()}
      <div className = "images">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    </div>
  );
  }

} //close Gallery Comp
Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Gallery;
