import dynamic from "next/dynamic";
import { supabase } from "src/utils/apis/supabase/supabase";
import { seoMapper } from "src/utils/seo/seoMapper";

const ServiceDetail = dynamic(
  () => import("src/page-modules/servicies/detail/components/ServiceDetail"),
  {
    ssr: false,
  }
);

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const ServiceDetailPage = () => {
  return (
    <Layout>
      <ServiceDetail />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data }: { data } = await supabase
    .from("services")
    .select()
    .eq("id", id);

  const serviceData = data[0];

  return {
    props: {
      seoData: seoMapper({
        title: `${serviceData.name} : ${serviceData.summary}`,
        description: serviceData.description,
      }),
    },
  };
}

export default ServiceDetailPage;
