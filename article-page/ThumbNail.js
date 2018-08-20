import React, { Component } from 'react';

class ThumbNail extends Component {
  /*
  selectImage(url, e, alt) {
    //console.log("selectImage() 'click'");
    let altTag = alt+1;
    this.setState({
      url:url,
      alt:altTag
    })
  }
  */

  renderThumbNail(imageUrl, index) {
    //var getInitialState = () => {hover:false}
    //var toggleHover = () => this.setState({hover: !this.state.hover})/*no return needed*/
    //removed from <img />   onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
    return (
    <div>
      <div id={index} float="right" width="10%" padding="5px" className='column' key={imageUrl.toString()}>
        <img width="100%" src={imageUrl} alt={'Photo No.' + (index + 1)} onClick={(e) => this.selectImage(imageUrl, e, index)}/>
        <span value={imageUrl} onClick={(e) => this.selectImage(imageUrl, e, index)}></span>
      </div>
    </div>
    )
  }

  render() {
    var columnStyle = {
      float: this.props.float,
      width: this.props.width,
      padding: this.props.padding
    }
    return(
      <div style={columnStyle}>
      {this.props.imageUrls.map((imageUrl, index) => this.renderThumbNail(imageUrl, index),this)}
      </div>
    );
  }
}

//export default ThumbNail;
