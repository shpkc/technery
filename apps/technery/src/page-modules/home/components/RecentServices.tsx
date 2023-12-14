import Link from "next/link";
import { Flex, Grid, Spacer, Stack, Text, TopicCard } from "pure-strike-ui";
import { TOPICS_LIST } from "src/constants/topics";

export const RecentServices = () => {
  return (
    <Stack padding={["16px", "0"]}>
      <Text color={"gray-800"} typo={"Text16Medium"}>
        RECENTLY REGISTERED
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
