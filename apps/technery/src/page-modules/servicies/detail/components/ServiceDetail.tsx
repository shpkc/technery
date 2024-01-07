import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Divider,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from "pure-strike-ui";
import { FaHeart } from "react-icons/fa";
import { ServicesInterface } from "src/types/services";
import { supabase } from "src/utils/apis/supabase/supabase";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";
import { BsTagFill } from "react-icons/bs";
import { ServiceDetailLoading } from "src/components/loading/ServiceDetailLoading";

const ServiceDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, isFetching }: { data; isFetching } = useQuery({
    queryKey: ["services", id],
    queryFn: () =>
      supabase
        .from("services")
        .select("*, topics(id, title)")
        .eq("id", id)
        .single(),
  });

  // NOTE : id에서 supabase bucket iamges folder 이미지 가져오기
  const { data: bucketData }: { data } = useQuery({
    queryKey: ["buckets", id],
    queryFn: () =>
      supabase.storage.from("services").list(`${id}/images`, {
        sortBy: { column: "created_at", order: "desc" },
      }),
  });

  if (isFetching) {
    return <ServiceDetailLoading />;
  }

  const serviceData: ServicesInterface = data.data || {};

  return (
    <Stack padding={"60px 0 0 0"}>
      <Stack width={["100%", "650px"]} margin={"0 auto"}>
        <Spacer height={["40px", "80px"]} />
        <Text typo={"Text32Bold"} align={"center"}>
          {serviceData.name}
        </Text>
        <Spacer height={["20px", "24px"]} />
        <Stack padding={["16px", "0px"]}>
          <Text typo={"Text24Medium"} align={"center"}>
            {serviceData.summary}
          </Text>
        </Stack>
        <Spacer height={["40px", "60px"]} />
        <Flex gap={20} overflow={"scroll"}>
          {bucketData?.data.map((item) => (
            <Image
              src={
                process.env.NEXT_PUBLIC_IMG_BASE +
                `/services/${id}/images/${item.name}`
              }
              key={item.url}
              height={"285px"}
            />
          ))}
        </Flex>
        <Spacer height={["40px", "60px"]} />
        <Stack padding={["16px", "0px"]}>
          <Text typo={"Text18Regular"} whitespace={"pre-wrap"}>
            {serviceData.description}
          </Text>
        </Stack>
        <Spacer height={["40px", "60px"]} />
        <Flex justify={"center"}>
          <Link href={serviceData.link} target={"_blank"}>
            <Stack width={"160px"}>
              <Button
                styleVariant={ButtonStyleVariant.Primary}
                text={"방문하기"}
              />
            </Stack>
          </Link>
          <Spacer width={12} />
          <Stack width={"60px"}>
            <Button
              styleVariant={ButtonStyleVariant.Like}
              leftComponent={<FaHeart style={{ marginRight: "6px" }} />}
              rightComponent={
                <Text typo={"Text14Bold"}>{serviceData.likeCount}</Text>
              }
            />
          </Stack>
        </Flex>
      </Stack>
      <Spacer height={["20px", "40px"]} />
      <Divider width={"100%"} height={"1px"} color={"gray-300"} />
      <Spacer height={["20px", "40px"]} />
      <Flex justify={"center"} alignment={"center"}>
        <BsTagFill size={28} />
        <Spacer width={["12px", "4px"]} />
        <Stack minWidth={"60px"}>
          <Link href={`/topics/${serviceData.topics.id}`}>
            <Button
              styleVariant={ButtonStyleVariant.Outline}
              size={ButtonSize.SMALL}
              text={serviceData.topics.title}
              borderRadius={"20px"}
              style={{ padding: "4px 8px" }}
            />
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ServiceDetail;
