import Head from 'next/head'
// import fetch from "isomorphic-fetch";
// import fetch from "node-fetch";

const PostBlog = ({post}) => (
  <div>
    <Head>
      <title>{post.title} | {process.env.SITE_NAME}</title>
    </Head>

    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  </div>
);

PostBlog.getInitialProps = async function (ctx) {
  const {id} = ctx.query
  const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`)
  const post = await resp.json()

  return {
    post
  }
}

export default PostBlog
