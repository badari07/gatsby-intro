import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import ReadLink from "../components/readlink";

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Home" description="Java system" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ReadLink to="/about/">Learn About Us&rarr;</ReadLink>
      <h2> Read my Blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
