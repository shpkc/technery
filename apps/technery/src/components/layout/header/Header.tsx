import Link from "next/link";
import { Stack, Text, Icon, Flex } from "pure-strike-ui";
import { ZIndex } from "~foundation";
import { FaGithub } from "react-icons/fa";
import { GITHUB_LINK } from "src/constants/link";

export const Header = () => {
  return (
    <Stack
      position={"fixed"}
      top={0}
      left={0}
      padding={"16px"}
      height={60}
      zIndex={ZIndex.Header}
      backgroundColor={"white"}
      width={"100%"}
    >
      <Flex direction={"row"} justify={"space-between"} alignment={"center"}>
        <Link href={"/"}>
          <Text typo={"Title24Bold"}>TECHNERY</Text>
        </Link>
        <a href={GITHUB_LINK} target={"_blank"}>
          <FaGithub size={32} />
        </a>
      </Flex>
    </Stack>
  );
};
