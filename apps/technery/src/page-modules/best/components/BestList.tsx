import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Flex, Grid, Spacer, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { Loading } from "src/components/loading/Loading";
import { PER_PAGE } from "src/constants/page";
import { CATEGORY_LIST } from "src/page-modules/constants/category";
import { PostItemInterface } from "src/page-modules/home/types/posts";
import { useGetFetch } from "src/utils/apis/query/useGetFecth";
import { formatBetweenTime } from "src/utils/date/date";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";

export const BestList = () => {
  const { data, isFetching } = useGetFetch({
    key: ["posts"],
    url: `posts?&order=viewCount.desc&limit=20`,
  });

  const onClickCard = React.useCallback((link: string) => {
    window.open(link);
  }, []);

  return (
    <Stack width={["100%", "1100px"]} margin={"0 auto"}>
      <Grid
        gridTemplateColums={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gridColumnGap={30}
        gridRowGap={80}
      >
        {data?.map((item: PostItemInterface) => {
          const {
            id,
            title,
            thumbnail,
            description,
            category,
            author,
            post_created_at,
            created_at,
            viewCount,
            link,
          } = item;
          const formatted_created_at = formatBetweenTime(post_created_at);
          return (
            <TechCard
              key={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              category={category}
              author={author}
              created_at={created_at}
              post_created_at={formatted_created_at}
              viewCount={viewCount}
              onClick={() => onClickCard(link)}
            />
          );
        })}
      </Grid>
      {isFetching && <Loading />}
    </Stack>
  );
};
