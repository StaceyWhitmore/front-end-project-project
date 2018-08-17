import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.js';
import './style.css';

class Gallery extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      url: require('./images/photo01.jpg'),
      alt: '1'
    }
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(url, e, alt) {
    let altTag = alt+1;
    this.setState({
      url:url,
      alt:altTag
    })
  }

  renderThumbNail(imageUrl, index) {
    return (
      <div id={index} float="right" width="10%" padding="5px" className='column' key={imageUrl.toString()}>
        <img width="100%" src={imageUrl} alt={'Photo No.' + (index + 1)} onClick={(e) => this.selectImage(imageUrl, e, index)}/>
        <span value={imageUrl} onClick={(e) => this.selectImage(imageUrl, e, index)}></span>
      </div>
    )
  }

  render() {
    var columnStyle = {
      float: this.props.float,
      width: this.props.width,
      padding: this.props.padding
    }
    var rowStyle = {
      marginLeft: '50px',
      marginRight: '50px'
    }
    var imgCaptionStyle = {
      color: 'gray',
      fontSize: '15px',
      fontStyle: 'italic'
    }
    var imgTextStyle = {
      position: 'absolute',
      /*image text position*/
      /*display: block; NEW*/
      /*bottom: 10px;*/
      /*left:  10px;*/
      color: 'dark gray',
      fontSize: '20px'
    }
    var textColStyle = {
      float: 'left'
    }

      return(
    <div className="galleryContainer">
      <Image src={this.state.url} alt={this.state.alt}>
            <div className='row' style={rowStyle}>
              <div className="text-col" style={textColStyle}>
                <h1 style={imgTextStyle} id="image-text">Photograph No.{this.state.alt}</h1>
                <br/>
                <p style={imgCaptionStyle} id="image-caption">Image Caption</p>
              </div>
              <div style={columnStyle}>
              {this.props.imageUrls.map((imageUrl, index) => this.renderThumbNail(imageUrl, index),this)}
              </div>
          </div>
              <div style={{content: "", display:'table', clear: 'both'}}></div>
      </Image>
    </div>
  )//close return()
}//close render()

} //****************************************************close Gallery Component

Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Gallery
