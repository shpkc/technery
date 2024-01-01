import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Flex, Image, Spacer, Stack, Text } from "pure-strike-ui";
import { ServicesInterface } from "src/types/services";
import { supabase } from "src/utils/apis/supabase/supabase";

const ServiceDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, isFetching }: { data; isFetching } = useQuery({
    queryKey: ["services", id],
    queryFn: () => supabase.from("services").select().eq("id", id),
  });

  if (isFetching) {
    return <div />;
  }
  const serviceData: ServicesInterface = data.data[0];

  return (
    <Stack padding={"60px 0 0 0"} width={["100%", "650px"]} margin={"0 auto"}>
      <Spacer height={["80px", "80px"]} />
      <Text typo={"Text32Bold"} align={"center"}>
        {serviceData.name}
      </Text>
      <Spacer height={["80px", "24px"]} />
      <Text typo={"Text24Medium"} align={"center"}>
        {serviceData.summary}
      </Text>
      <Spacer height={["80px", "60px"]} />
      <Flex gap={20} overflow={"scroll"}>
        {serviceData.images.map((item) => (
          <Image
            src={item.url}
            key={item.url}
            width={"500px"}
            height={"285px"}
          />
        ))}
      </Flex>
      <Spacer height={["80px", "60px"]} />
      <Text typo={"Text18Regular"} whitespace={"pre-wrap"}>
        {serviceData.description}
      </Text>
    </Stack>
  );
};

export default ServiceDetail;
