import dynamic from "next/dynamic";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const Home = dynamic(() => import("src/page-modules/home/components/Home"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
