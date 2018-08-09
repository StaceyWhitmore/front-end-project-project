import Gallery from 'Gallery';
import PropTypes from 'prop-types';
import img from '../images/photo01.jpg';
import './loader.css';
import './style.css';


//chilp component of Gallery (which will handle state)
class ThumbNail extends React.Component {




  LogProps(WrappedLogComp) {
    class LogProps extends React.Component {
      componentDidUpdate (prevProps) {
        console.log('old props:', prevProps);
        console.log('new props', this.props);
      }
      render() {
        const {forwardedRef, ...rest} = this.props;

        return <WrappedLogComp ref={forwardedRef}{...rest} />

      }
    } //close Inner class

  const name = WrappedLogComp.displayName || WrappedLogComp.name;
  forwardedRef.displayName = `LogProps(${name})`;


  return React.forwardRef((props,ref) => {
    return <LogProps {...props} forwardedRef={ref} />

  });

  }





}  // Close ThumbNail Component



/*
Original Text in place of <ThumNail /> comp:

{this.props.imageUrls.map((imageUrl, index) => this.renderImage(imageUrl,index),this)}



*/




/*Things to call with ref:
ref.curren.focus()
When the ref points to a standard Dom element. To retrieve the element I just
need to call
this.refs.ref

If the ref points to a composite component
(a custom component you have created yourself)
you need to use the new ReactDOM module like so
ReactDOM.findDOMNode(this.refs.ref).


*/



function LogProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }

  }
  return LogProps;
}



/*If you add a ref to a HOC,
the ref will refer to the outermost container component,
not the wrapped component.*/
