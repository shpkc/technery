import { useInfiniteQuery } from "@tanstack/react-query";
import { Grid, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { Loading } from "src/components/loading/Loading";
import { PER_PAGE } from "src/constants/page";
import { dateHelper, formatBetweenTime } from "src/utils/date/date";
import { PostItemInterface } from "../types/posts";
import { useMutate } from "src/utils/apis/query/useMutate";
import { patchMethod } from "src/utils/apis/method/patchMethod";
import { supabase } from "src/utils/apis/supabase/supabase";

export const TechPostList = () => {
  const [category, setCategory] = React.useState<string>("");
  const { threeMonthAgo } = dateHelper();

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam }) => {
      return supabase
        .from("posts")
        .select("*")
        .gt("post_created_at", threeMonthAgo)
        .order("post_created_at", { ascending: false })
        .limit(30)
        .range(pageParam * PER_PAGE, (pageParam + 1) * PER_PAGE - 1);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages: any, lastPageParam) => {
      const nextPage = allPages.length + 1;
      return nextPage;
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
    return data?.pages.flatMap((page: any) => page?.data);
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
