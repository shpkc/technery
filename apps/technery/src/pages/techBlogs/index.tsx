import dynamic from "next/dynamic";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const Posts = dynamic(
  () => import("src/page-modules/techBlogs/components/Posts"),
  {
    ssr: false,
  }
);

const PostsPage = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default PostsPage;
