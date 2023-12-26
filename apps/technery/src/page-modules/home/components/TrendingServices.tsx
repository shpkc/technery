import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  Flex,
  Grid,
  ServiceCard,
  Spacer,
  Stack,
  Text,
  TopicCard,
} from "pure-strike-ui";
import { TOPICS_LIST } from "src/constants/topics";
import { ServicesInterface } from "src/types/services";
import { supabase } from "src/utils/apis/supabase/supabase";

export const TrendingServices = () => {
  const { data }: { data } = useQuery({
    queryKey: ["services"],
    queryFn: () => supabase.from("services").select(),
  });

  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        TRENDING SERVICES
      </Text>
      <Spacer height={32} />
      <Grid
        gridTemplateColums={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        gridColumnGap={60}
        gridRowGap={80}
      >
        {data?.data?.map((item: ServicesInterface) => {
          const { id, name, description, thumbnail, link } = item;
          return (
            <Link href={`/services/${link}`} key={id}>
              <ServiceCard
                name={name}
                description={description}
                thumbnail={thumbnail}
              />
            </Link>
          );
        })}
      </Grid>
    </Stack>
  );
};
