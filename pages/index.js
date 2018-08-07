/*This module can be ignored for now (along with about.js and article.js)
as this project does not require react at this time.
*/

import Layout from '../components/MyLayout.js';
//import {withRouter} from 'next/router';
//import Markdown from 'react-markdown';

import Article from '../article-page/Article.js';
import Link from 'next/link';

function getPosts() {
  return [
    { id: 'about', title:'about.js'},
    { id: 'article' , title:'article.js'},
    { id: 'title' , title:'Wireframe for title.js page'},
    { id: 'hello-nextjs', title: 'Hello next.js'}
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
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
