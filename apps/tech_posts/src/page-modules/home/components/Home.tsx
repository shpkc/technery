import { Spacer, Stack, Text } from "pure-strike-ui";
import { TechPostItem } from "./TechPostItem";

const Home = () => {
  return (
    <Stack paddingTop={60}>
      <Spacer height={100} />
      <Text typo={"Title48Black"} align={"center"}>
        다양한 국내 기술 블로그들을 서핑하세요
      </Text>
      <Spacer height={20} />
      <Text typo={"MainText20Medium"} align={"center"} color={"gray-600"}>
        국내외 흥미로운 테크 기술 글들을 소개시켜드려요
      </Text>
      <TechPostItem />
    </Stack>
  );
};

export default Home;
