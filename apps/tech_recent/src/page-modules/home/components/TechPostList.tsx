import { Grid, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { Loading } from "src/components/loading/Loading";
import { useGetFetch } from "src/utils/apis/query/useGetFecth";
import { PostItemInterface } from "../types/posts";

export const TechPostList = () => {
  const { data, isLoading } = useGetFetch({
    key: ["posts"],
    url: "posts?order=id.desc",
  });

  const onClickCard = React.useCallback((link: string) => {
    window.open(link);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack width={1100} margin={"0 auto"}>
      <Grid>
        {data?.map((item: PostItemInterface) => {
          return (
            <TechCard
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              category={item.category}
              created_at={item.created_at}
              onClick={() => onClickCard(item.link)}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};
