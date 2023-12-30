import { Spacer, Stack, Text } from "pure-strike-ui";
import { RecentServices } from "./RecentServices";
import { TrendServices } from "./TrendServices";
import { TrendingTopics } from "./TrendingTopics";

const Home = () => {
  return (
    <Stack padding={"60px 0 0 0"} width={["100%", "1100px"]} margin={"0 auto"}>
      <Spacer height={["16px", "32px"]} />
      <TrendingTopics />
      <Spacer height={["32px", "80px"]} />
      <TrendServices />
      <Spacer height={["32px", "80px"]} />
      <RecentServices />
      <Spacer height={["32px", "80px"]} />
    </Stack>
  );
};

export default Home;
