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
  TrendServiceCard,
} from "pure-strike-ui";
import { ServicesInterface } from "src/types/services";
import { supabase } from "src/utils/apis/supabase/supabase";

export const TrendServices = () => {
  const { data }: { data } = useQuery({
    queryKey: ["trendServices"],
    queryFn: () => supabase.from("services").select().eq("isTrend", true),
  });

  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        TRENDING SERVICES
      </Text>
      <Spacer height={["16px", "32px"]} />
      <Grid
        gridTemplateColums={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gridColumnGap={10}
        gridRowGap={16}
      >
        {data?.data?.map((item: ServicesInterface) => {
          const { id, name, summary, thumbnail, likeCount } = item;
          return (
            <Link href={`/services/${id}`} key={id}>
              <TrendServiceCard
                name={name}
                summary={summary}
                likeCount={likeCount}
                thumbnail={thumbnail}
              />
            </Link>
          );
        })}
      </Grid>
    </Stack>
  );
};
