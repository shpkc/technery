import Link from "next/link";
import { Flex, Grid, Spacer, Stack, Text, TopicCard } from "pure-strike-ui";
import { TOPICS_LIST } from "src/constants/topics";
import { TRENDING_TOPICS_LIST } from "../core/constants";

export const TrendingTopics = () => {
  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        TRENDING TOPICS
      </Text>
      <Spacer height={32} />
      <Grid
        gridTemplateColums={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        gridColumnGap={40}
        gridRowGap={20}
      >
        {TOPICS_LIST.map((item) => {
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
