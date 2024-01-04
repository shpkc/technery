import { Stack, Flex } from "pure-strike-ui";
import BeatLoader from "react-spinners/BeatLoader";
import { Palette } from "~foundation";

export const ServiceDetailLoading = () => {
  return (
    <Stack width={["100%", "650px"]} margin={"0 auto"} padding={"300px 0"}>
      <Flex justify={"center"}>
        <BeatLoader style={{ width: "auto" }} color={Palette["gray-500"]} />
      </Flex>
    </Stack>
  );
};
