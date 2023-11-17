import Link from "next/link";
import { SearchIcon } from "pure-strike-icons";
import { Stack, Text, Icon, Flex } from "pure-strike-ui";

export const Header = () => {
  return (
    <Stack position={"fixed"} top={0} left={0} paddingAll={16} height={60}>
      <Flex direction={"row"} justify={"space-between"} alignment={"center"}>
        <Link href={"/"}>
          <Text typo={"Title24Bold"}>TECH ARTICLES</Text>
        </Link>
        <Icon source={SearchIcon} />
      </Flex>
    </Stack>
  );
};
