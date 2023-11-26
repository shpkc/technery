import { Button, Flex, Grid, Spacer, Stack, TechCard } from "pure-strike-ui";
import React from "react";
import { Loading } from "src/components/loading/Loading";
import { CATEGORY_LIST } from "src/page-modules/constants/category";
import { useGetFetch } from "src/utils/apis/query/useGetFecth";
import { dateHelper } from "src/utils/date/date";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";
import { PostItemInterface } from "../types/posts";

export const TechPostList = () => {
  const { oneMonthAgo } = dateHelper();

  const [category, setCategory] = React.useState("");
  const { data, isFetching } = useGetFetch({
    key: ["posts", category],
    url:
      category !== ""
        ? `posts?order=id.desc&created_at=gt.${oneMonthAgo}&category=plfts.${category}`
        : `posts?order=id.desc&created_at=gt.${oneMonthAgo}`,
  });

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
      <Spacer height={16} />
      {isFetching && <Loading />}
      <Grid gridTemplateColums={3} gridColumnGap={30} gridRowGap={80}>
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
