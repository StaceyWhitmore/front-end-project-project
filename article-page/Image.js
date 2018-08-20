import React from 'react';
import img from './images/photo01.jpg';
import './css/style.css';
import './css/imageStyle.css';


class Image extends React.Component {

  render() {
    //console.log("Rendering: Image");
    var containerStyle = {
      display: 'block'
    }
    var imageContainerStyle = {

      marginLeft: 'none',
      marginRight: 'none',
         display: 'block'
    }
    var imgStyle = {
      width: this.props.width
    }
    var subTitleStyle = {
      fontSize: '75%',
      margintBottom: '0px'
    }
    var titleStyle = {
      marginTop: '0px'
    }

    //console.log('this.props.url is ', this.props.url);
    //if (this.props.hidden) return null;
    return (
      <div style={containerStyle} className='container' name={this.props.name}>
       <div style={imageContainerStyle} >
           <div>
               <p style={subTitleStyle}>SubTitle</p>
               <h2 style={titleStyle}>Title of the Section</h2>
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

export default Image;
