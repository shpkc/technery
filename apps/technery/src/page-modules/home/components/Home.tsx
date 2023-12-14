import { Spacer, Stack, Text } from "pure-strike-ui";
import { RecentServices } from "./RecentServices";
import { TrendingTopics } from "./TrendingTopics";

const Home = () => {
  return (
    <Stack padding={"60px 0 0 0"} width={["100%", "1100px"]} margin={"0 auto"}>
      <Spacer height={32} />
      <TrendingTopics />
      <Spacer height={100} />
      <RecentServices />
    </Stack>
  );
};

export default Home;
