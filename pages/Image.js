import React from 'react';
import img from './images/photo01.jpg';
import './style.css';


class Image extends React.Component {

  render() {

    var containerStyle = {
      //display: 'block'
    }
    var imageContainerStyle = {
      marginLeft: '50px',
      marginRight: '50px',
         display: 'block'
    }
    var imgStyle = {
      width: this.props.width
    }

    //console.log('this.props.url is ', this.props.url);
    //if (this.props.hidden) return null;
    return (
      <div style={containerStyle} className='container' name={this.props.name}>
       <div style={imageContainerStyle} >
           <div>
               <p>Sub Title</p>
               <h2>Title of the Section</h2>
           </div>
               <div style={imgStyle}>
                   <img src={this.props.src}  width="100%" alt={this.props.alt}/>
               </div>
        </div>
            {this.props.children}
      </div>
    )

  } //close render()
} //close <Image />

export default Image
