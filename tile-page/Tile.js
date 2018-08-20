import React, { Component } from 'react';
import Video from './Video';
import Button from './Button';
//import './css/tile.css';
//import ReactDOM from 'react-dom';

class Tile extends Component {
  constructor(props, context) {
    super(props, context);
    /*
    playPressed: false,
    isPlaying: false
    */
    this.state = {
      expanded:false

    }
    this.handlePlayEvent = this.handlePlayEvent.bind(this);
    this.handleMouseDown= this.handleMouseDown.bind(this);
    this.expandVideo = this.expandVideo.bind(this);
  }
  /*
  componentDidMount() {
    window.addEventListener("onPlay", this.handlePlayEvent.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener("onPlay", this.handlePlayEvent.bind(this));
  }
  */
  handlePlayEvent(e) {
    this.expandVideo();
    //console.log(Array(16).join("bat" - 1) + " Batman!");
    console.log('handlePlayEvent() called ');
    e.stopPropagation();
  }


  handleMouseDown(e) {
    this.expandVideo();
    console.log("handleMouseDown() invoked 'click' ");

    e.stopPropagation();
  }


  expandVideo() {
    /*
    playPressed: !this.state.playPressed,
    isPlaying: !this.state.isPlaying
    */
    this.setState({
        expanded: !this.state.expanded

    });
  }
  render() {
    console.log('rendering: Tile Component')
    var flexContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      flexDirection: 'row'
    }

    /*
    handlePlayEvent={this.handlePlayEvent}

    <Button
      handleMouseDown={this.handleMouseDown}
    />
    */
    return(
      <div className="flexContainer" style={flexContainerStyle}>
        <Button
          handleMouseDown={this.handleMouseDown} />
        <Video
          handleMouseDown={this.handleMouseDown}
          handlePlayEvent={this.handlePlayEvent}
          videoSize={this.state.expanded} />

        <div id="paragraph">
          <p className="paragraph"><strong>Note:</strong> CSS Animations do not work in Internet Explorer 9 and earlier versions. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      </div>
    );
  }
}
export default Tile;
