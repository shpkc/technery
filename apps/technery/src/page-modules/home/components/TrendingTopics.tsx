import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Grid, Spacer, Stack, Text, TopicCard } from "pure-strike-ui";
import { supabase } from "src/utils/apis/supabase/supabase";
import { TopicInterface } from "src/types/topics";
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Palette } from "~foundation";

export const TrendingTopics = () => {
  const { data, isFetching }: { data; isFetching } = useQuery({
    queryKey: ["topics"],
    queryFn: () => supabase.from("topics").select().eq("isTrend", true),
  });
  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        TRENDING TOPICS
      </Text>
      <Spacer height={["16px", "32px"]} />
      {isFetching && (
        <BeatLoader color={Palette["gray-500"]} style={{ margin: "0 auto" }} />
      )}
      <Grid
        gridTemplateColums={["repeat(1,1fr)", "repeat(4, 1fr)"]}
        gridAutoFlow={["column", "row"]}
        gridColumnGap={["20px", "40px"]}
        gridRowGap={20}
      >
        {data?.data?.map((item: TopicInterface) => {
          const { title, emoji, bgColor, value } = item;
          return (
            <Link href={`/topics/${value}`} key={value}>
              <TopicCard title={title} emoji={emoji} bgColor={bgColor} />
            </Link>
          );
        })}
      </Grid>
    </Stack>
  );
};
