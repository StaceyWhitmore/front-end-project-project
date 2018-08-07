import Layout from '../components/MyLayout.js';
import {withRouter} from 'next/router';
import Markdown from 'react-markdown';
import Test from './test.js';



/*Addendum*/
export default withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is the post.
Here is mark down for a  [lINk](/link).
A title is made with three hashbangs.

### This is a title

* and bullet points are made with asterisks
* bullet
* another bullet

This concludes the markdown (the source attribute of the <Markdown
component).
Here's the content (this line was the content bc it is below the title)
     `}/>
   </div>
   <p>This is a paragraph and is not markdown.
   The test app will be rendered  below
   </p>



   <Test />


   
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
))
