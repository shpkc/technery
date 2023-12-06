import { Stack, Text } from "pure-strike-ui";
import { GITHUB_LINK } from "src/constants/link";

export const Footer = () => {
  return (
    <Stack padding={["60px 0 30px 0", "100px 0 30px 0"]}>
      <Text align={"center"} typo={"MainText16Bold"}>
        © 2023 Teveloper •{" "}
        <a href={GITHUB_LINK} target={"_blank"}>
          Github
        </a>
      </Text>
    </Stack>
  );
};
