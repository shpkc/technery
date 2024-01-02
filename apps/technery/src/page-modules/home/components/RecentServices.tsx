import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Grid, ServiceCard, Spacer, Stack, Text } from "pure-strike-ui";
import { ServicesInterface } from "src/types/services";
import { supabase } from "src/utils/apis/supabase/supabase";

export const RecentServices = () => {
  const { data }: { data } = useQuery({
    queryKey: ["services"],
    queryFn: () => supabase.from("services").select(),
  });

  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        RECENTLY REGISTERED
      </Text>
      <Spacer height={32} />
      <Grid
        gridTemplateColums={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        gridColumnGap={60}
        gridRowGap={80}
      >
        {data?.data?.map((item: ServicesInterface) => {
          const { id, name, likeCount, summary, thumbnail, link } = item;
          return (
            <Link href={`/services/${id}`} key={id}>
              <ServiceCard
                name={name}
                summary={summary}
                thumbnail={thumbnail}
                likeCount={likeCount}
              />
            </Link>
          );
        })}
      </Grid>
    </Stack>
  );
};
