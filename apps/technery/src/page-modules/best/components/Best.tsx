import { Spacer, Stack, Text } from "pure-strike-ui";
import { BestList } from "../components/BestList";

const Best = () => {
  return (
    <Stack padding={["0 16px", "0px"]}>
      <Spacer height={["100px", "160px"]} />
      <Stack>
        <Text typo={"Title48Black"} align={"center"}>
          이번주 조회수가 가장 높았던 포스팅을 소개시켜드려요
        </Text>
        <Spacer height={"20px"} />
        <Text typo={"MainText20Medium"} align={"center"} color={"gray-600"}>
          2023.12.09 ~ 2023.12.02
        </Text>
      </Stack>
      <Spacer height={["60px", "100px"]} />
      <BestList />
    </Stack>
  );
};

export default Best;
