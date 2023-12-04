import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Flex, Grid, Spacer, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { Loading } from "src/components/loading/Loading";
import { PER_PAGE } from "src/constants/page";
import { CATEGORY_LIST } from "src/page-modules/constants/category";
import { formatDaysAgoFromDate } from "src/utils/date/date";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";
import { getPostList } from "../core/_requests";
import { PostItemInterface } from "../types/posts";

export const TechPostList = () => {
  const [category, setCategory] = React.useState<string>("");

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam }) => getPostList({ pageParam, category }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      console.log(allPages);
      return lastPage?.length === 0 || lastPage?.length < PER_PAGE
        ? undefined
        : nextPage;
    },
  });

  const currentCount = React.useMemo(() => {
    return data?.pages.flatMap((page) => page).length;
  }, [data]);

  const listData = React.useMemo(() => {
    return data?.pages.flatMap((page) => page);
  }, [data]);

  const onClickCard = React.useCallback((link: string) => {
    window.open(link);
  }, []);

  const onClickCategory = React.useCallback(
    (category: string) => {
      setCategory(category);
    },
    [category]
  );

  return (
    <Stack width={1100} margin={"0 auto"}>
      <Flex direction={"row"} gap={8}>
        {CATEGORY_LIST.map((item) => (
          <Button
            key={item.value}
            text={item.name}
            size={ButtonSize.SMALL}
            styleVariant={ButtonStyleVariant.Primary}
            onClick={() => onClickCategory(item.value)}
          />
        ))}
      </Flex>
      <Spacer height={30} />
      <InfiniteScrollTemplate
        nextPage={() => fetchNextPage()}
        currentCount={currentCount as number}
      >
        <Grid gridTemplateColums={3} gridColumnGap={30} gridRowGap={80}>
          {listData?.map((item: PostItemInterface) => {
            const formatted_created_at = formatDaysAgoFromDate(
              item.post_created_at
            );
            return (
              <TechCard
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                description={item.description}
                category={item.category}
                author={item.author}
                created_at={item.created_at}
                post_created_at={formatted_created_at}
                onClick={() => onClickCard(item.link)}
              />
            );
          })}
        </Grid>
      </InfiniteScrollTemplate>
      {isFetching && <Loading />}
    </Stack>
  );
};
