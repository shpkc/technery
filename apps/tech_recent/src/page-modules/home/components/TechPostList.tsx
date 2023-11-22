import { Grid, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { useGetFetch } from "src/utils/apis/query/useGetFecth";
import { PostItemInterface } from "../types/posts";

export const TechPostList = () => {
  const { data } = useGetFetch({
    key: ["posts"],
    url: "posts",
  });
  return (
    <Stack width={1100} margin={"0 auto"}>
      <Grid>
        {data?.map((item: PostItemInterface) => {
          const onClickCard = () => {
            window.open(item.link);
          };
          return (
            <TechCard
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              category={item.category}
              created_at={item.created_at}
              onClick={onClickCard}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};
