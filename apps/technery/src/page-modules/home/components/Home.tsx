import { Spacer, Stack, Text } from "pure-strike-ui";
import { TechPostList } from "./TechPostList";

const Home = () => {
  return (
    <Stack padding={["0 16px", "0px"]}>
      <Spacer height={["100px", "160px"]} />
      <Stack>
        <Text typo={"Title48Black"} align={"center"}>
          다양한 기술 블로그들을 살펴보세요
        </Text>
      </Stack>
      <Spacer height={"20px"} />
      <Text typo={"MainText20Medium"} align={"center"} color={"gray-600"}>
        테크 블로그의 다양한 포스팅을 통해 기술의 트렌드와 동향을 한눈에
        살펴보세요
      </Text>
      <Spacer height={["60px", "100px"]} />
      <TechPostList />
    </Stack>
  );
};

export default Home;
