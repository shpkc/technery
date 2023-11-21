import { Flex, Grid, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { PostsListResponse } from "../types/posts";

export const TechPostList = ({ data }: { data: PostsListResponse }) => {
  return (
    <Stack width={1100} margin={"0 auto"}>
      <Grid>
        {data.map((item) => (
          <TechCard
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            category={item.category}
            created_at={item.created_at}
          />
        ))}
      </Grid>
    </Stack>
  );
};
