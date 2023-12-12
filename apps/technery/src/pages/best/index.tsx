import dynamic from "next/dynamic";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const Best = dynamic(() => import("src/page-modules/best/components/Best"), {
  ssr: false,
});

const BestPage = () => {
  return (
    <Layout>
      <Best />
    </Layout>
  );
};

export default BestPage;
