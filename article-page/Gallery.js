import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Image from './Image.js';
//import ThumbNail from './ThumbNail';
import Wrapper from './lowerLayout';
import './css/style.css';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hover: false,
      url: require('./images/photo01.jpg'),
      alt: '1'
    }
    this.selectImage = this.selectImage.bind(this);
    //this.toggleHover = this.toggleHover.bind(this);
  }

  selectImage(url, e, alt) {
    //console.log("selectImage() 'click'");
    let altTag = alt+1;
    this.setState({
      url:url,
      alt:altTag
    })
  }


  /*
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  handleMouseEnter(e) {
    this.toggleHover();

    e.stopPropagation();
  }
  */

  renderThumbNail(imageUrl, index) {
    //var getInitialState = () => {hover:false}
    //var toggleHover = () => this.setState({hover: !this.state.hover})//no return needed
    //removed from <img />   onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
    return (
      <div id={index} float="right" width="10%" padding="0px" className='column' key={imageUrl.toString()}>
        <img width="100%" src={imageUrl} alt={'Photo No.' + (index + 1)} onClick={(e) => this.selectImage(imageUrl, e, index)}/>
        <span value={imageUrl} onClick={(e) => this.selectImage(imageUrl, e, index)}></span>
      </div>
    )
  }


  render() {
    //console.log("Rendering: Gallery");
    var pageWrapperStyle = {
      fontFamily: " 'Open Sans', sans-serif, courier ",
      boxSizing: 'borderBox',
      margin: '100px'
    }

    var columnStyle = {
      float: this.props.float,
      width: this.props.width,
      padding: this.props.padding
    }

    var rowStyle = {
      /*
      marginLeft: '0px',
      marginRight: '0px',
      */
    //  marginBottom: '0px'
    }
    var imgCaptionStyle = {
      color: 'darkgray',
      fontSize: '12px',
      fontStyle: 'italic'
    }
    var imgTextStyle = {
      position: 'absolute',
      /*image text position*/
      /*display: block; NEW*/
      /*bottom: 10px;*/
      /*left:  10px;*/
      color: 'dark gray',
      fontSize: '15px'
    }
    var textColStyle = {
      float: 'left'
    }
    /*
    var hoverStyle;
    if (this.state.hover) {
      hoverStyle = {cursor: 'pointer', opacity: 1}
    } else {
      hoverStyle = {columnStyle}
    }
    */

      return(
  <div style={pageWrapperStyle}>
    <div className="galleryContainer">
      <Image src={this.state.url} alt={this.state.alt}>
            <div className='row' style={rowStyle}>
              <div className="text-col" style={textColStyle}>
                <h1 style={imgTextStyle} id="image-text">Photograph No.{this.state.alt}</h1>
                <br/>
                <p style={imgCaptionStyle} id="image-caption">Caption for the video</p>
              </div>
                <div style={columnStyle}>
                  {this.props.imageUrls.map((imageUrl, index) => this.renderThumbNail(imageUrl, index),this)}
                </div>
             </div>
              <div style={{content: "", display:'table', clear: 'both'}}></div>
      </Image>
    </div>
    <Wrapper />
  </div>
  )//close return()
}//close render()

} //****************************************************close Gallery Component
/*
Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
}
*/
export default Gallery

/* REPLACED BY <ThumbNail /> Component
<div style={columnStyle}>
{this.props.imageUrls.map((imageUrl, index) => this.renderThumbNail(imageUrl, index),this)}
</div>


<ThumbNail imageUrls={imageUrl} selectImage={this.selectImage}/>
*/
