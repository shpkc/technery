import { Stack, Text } from "pure-strike-ui";
import { GITHUB_LINK } from "src/constants/link";

export const Footer = () => {
  return (
    <Stack paddingTop={100} paddingBottom={30}>
      <Text align={"center"} typo={"MainText16Bold"}>
        © 2023 Teveloper •{" "}
        <a href={GITHUB_LINK} target={"_blank"}>
          Github
        </a>
      </Text>
    </Stack>
  );
};
