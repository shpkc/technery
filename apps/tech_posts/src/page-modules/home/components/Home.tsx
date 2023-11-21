import { Spacer, Stack, Text } from "pure-strike-ui";
import { TechPostList } from "./TechPostList";

const Home = ({ data }: { data }) => {
  return (
    <Stack paddingTop={60}>
      <Spacer height={100} />
      <Text typo={"Title48Black"} align={"center"}>
        다양한 기술 블로그들을 살펴보세요
      </Text>
      <Spacer height={20} />
      <Text typo={"MainText20Medium"} align={"center"} color={"gray-600"}>
        국내외 흥미로운 테크 기술 글들을 소개시켜드려요
      </Text>
      <Spacer height={100} />
      <TechPostList data={data} />
    </Stack>
  );
};

export default Home;
