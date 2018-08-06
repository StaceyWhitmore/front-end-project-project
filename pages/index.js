/*This module can be ignored for now (along with about.js and article.js)
as this project does not require react at this time.
*/

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'article' , title:'Wireframe for article.js page'},
    { id: 'title' , title:'Wireframe for title.js page'}

  ]
}

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
