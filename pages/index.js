import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'article' , title:'Wireframe for article.js page'},
    { id: 'title' , title:'Wireframe for title.js page'}

  ]
}
//NEW
/*
Now let's add a simple change to our home page.
We have isolated (outside of export statement) our link component like this:*/
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a className="box">{post.title}</a>
    </Link>
    <style jsx>{`


        li {
          display:grid;
          grid-template-columns: 200px 200px 200px;
          grid-gap: 5px;
          background-color: #fff;
          color: #444;


        }

        a {
          text-decoration: none;
          font-family: "Arial";
        }

        .box {
          background-color: #444;
          color: #fff;
          border-radius: 5px;
          padding: 20px;
          font-size: 100%;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </li>
)
/*
REMOVED fr li {} styles:   ---->

 list-style: none;
  margin: 5px 0;

*/
/*
CSS rules have NO effect on ELEMENTS (i.e. <a>) [from?] INside of a Child COMPonent
(from inside the <Layout> component. so create a new comp [e.g. PostLink] and
style from within there instead. {
  [However there is  a WORKAROUND by using the 'global' keyword after 'jsx'
. But try to use this sparingly. It comes in handy with markdown text.
To see this in action check out the pages.js module.]
}).

(i.e. Style them from within the parent component while declaring it and
RATHER than waiting to style it from with the child component while exporting it
using the export default () => statement.)

This feature of styled-jsx helps you to manage styles for bigger apps.

In that case, you need to style the child component DIRECTLY
(i.e. From withIN the component const declaration (above) and NOT inside then
export statement).
And in our particular case, we need to do this for our Link component
(style the Link component Directly):
*/
export default () => (
  <Layout>
    <h1>Front End React Project</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
          ))}
    </ul>

  </Layout>
)
/*
h1, a {
  font-family: "Arial";
}

ul {
  padding: 0;
}
*/

/*
Styles should go inside template strings

Styled jsx works as a babel plugin.
It will parse all of the CSS and apply it in the build process.
 (With that our styles get applied without any overhead time)

It also supports having constraints inside styled-jsx.
In the future, you will be able to use any dynamic variable inside styled-jsx.
That is why CSS needs to go inside of a template string. ({``})*/
