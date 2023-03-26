import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  console.log("[HomePage] render : ", posts);
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <main>
        <h1>Eddy's My Blog</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.date}>
                <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
