import React from "react";
import Navbar from "../Navbar";

const posts = ({ posts }) => {
  console.log(posts);
  const thePosts = posts.posts.map((singlePost) => {
    return (
      <>
        <h3>{singlePost.title}</h3>
        <p>{singlePost.body}</p>
        <a href={`/posts/${singlePost.id}`}>Read More</a>
      </>
    );
  });
  return (
    <>
      <Navbar />
      <br />
      <br />
      {thePosts}
    </>
  );
};

export default posts;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
