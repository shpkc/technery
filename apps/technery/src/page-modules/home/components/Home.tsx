import { Spacer, Stack, Text } from "pure-strike-ui";
import { TechPostList } from "./TechPostList";

const Home = () => {
  return (
    <Stack paddingTop={60}>
      <Spacer height={100} />
      <Text typo={"Title48Black"} align={"center"}>
        다양한 기술 블로그들을 살펴보세요
      </Text>
      <Spacer height={20} />
      <Text typo={"MainText20Medium"} align={"center"} color={"gray-600"}>
        여러 테크 블로그의 다양한 포스팅을 통해 최신 트렌드를 확인해보세요
      </Text>
      <Spacer height={100} />
      <TechPostList />
    </Stack>
  );
};

export default Home;
