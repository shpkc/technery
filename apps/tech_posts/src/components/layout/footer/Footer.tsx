import { Stack, Text } from "pure-strike-ui";

export const Footer = () => {
  const GITHUB_LINK = "https://github.com/shpkc/tech-articles";
  return (
    <Stack paddingTop={100} paddingBottom={30}>
      <Text align={"center"} typo={"MainText16Bold"}>
        © 2023 •{" "}
        <a href={GITHUB_LINK} target={"_blank"}>
          Github
        </a>
      </Text>
    </Stack>
  );
};
