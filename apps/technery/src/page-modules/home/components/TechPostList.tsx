import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Flex, Grid, Spacer, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { Loading } from "src/components/loading/Loading";
import { PER_PAGE } from "src/constants/page";
import { CATEGORY_LIST } from "src/page-modules/constants/category";
import { formatBetweenTime } from "src/utils/date/date";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";
import { getPostList } from "../core/_requests";
import { PostItemInterface } from "../types/posts";
import { useMutate } from "src/utils/apis/query/useMutate";
import { postMethod } from "src/utils/apis/method/postMethod";
import { patchMethod } from "src/utils/apis/method/patchMethod";

export const TechPostList = () => {
  const [category, setCategory] = React.useState<string>("");

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam }) => getPostList({ pageParam, category }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage?.length === 0 || lastPage?.length < PER_PAGE
        ? undefined
        : nextPage;
    },
  });

  const { mutate: updateViewCountMutate } = useMutate({
    fetch: ({ id, viewCount }) =>
      patchMethod({
        url: `posts?id=eq.${id}`,
        body: {
          viewCount: viewCount + 1,
        },
      })(),
    refetchKey: ["posts"],
  });

  const currentCount = React.useMemo(() => {
    return data?.pages.flatMap((page) => page).length;
  }, [data]);

  const listData = React.useMemo(() => {
    return data?.pages.flatMap((page) => page);
  }, [data]);

  // NOTE : 클릭시 viewCount 업데이트 & 링크 창 열기
  const onClickCard = React.useCallback(({ id, viewCount, link }) => {
    window.open(link);
    updateViewCountMutate({ id, viewCount });
  }, []);

  const onClickCategory = React.useCallback(
    (category: string) => {
      setCategory(category);
    },
    [category]
  );

  return (
    <Stack width={["100%", "1100px"]} margin={"0 auto"}>
      <Flex direction={"row"} gap={8} flexWrap={"wrap"}>
        {CATEGORY_LIST.map((item) => {
          const isSelected = category === item.name;
          return (
            <Button
              key={item.value}
              text={item.name}
              size={ButtonSize.SMALL}
              styleVariant={ButtonStyleVariant.Primary}
              selected={isSelected}
              onClick={() => onClickCategory(item.value)}
            />
          );
        })}
      </Flex>
      <Spacer height={"30px"} />
      <InfiniteScrollTemplate
        nextPage={() => fetchNextPage()}
        currentCount={currentCount as number}
      >
        <Grid
          gridTemplateColums={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gridColumnGap={30}
          gridRowGap={80}
        >
          {listData?.map((item: PostItemInterface) => {
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
                onClick={() => onClickCard({ id, viewCount, link })}
              />
            );
          })}
        </Grid>
      </InfiniteScrollTemplate>
      {isFetching && <Loading />}
    </Stack>
  );
};
