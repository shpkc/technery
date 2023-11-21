import dynamic from "next/dynamic";
import { supabaseClient } from "src/utils/apis/supabase/client";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const Home = dynamic(() => import("src/page-modules/home/components/Home"), {
  ssr: false,
});

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Home data={data} />
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps = async (ctx) => {
  const { data } = await supabaseClient
    .from("posts")
    .select()
    .order("id", { ascending: false });
  return {
    props: {
      data,
    },
  };
};
