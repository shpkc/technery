import Link from "next/link";
import { Stack, Text, Icon, Flex, Spacer, Responsive } from "pure-strike-ui";
import { ZIndex } from "~foundation";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReportIcon } from "pure-strike-icons";

const MENU_LIST = [
  { title: "Topics", link: "/topics" },
  { title: "Tech Blogs", link: "/techBlogs" },
  { title: "News Letter", link: "/newsLetter" },
  { title: "Submit", link: "/submit" },
];

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
      borderBottom={true}
      borderWidth={1}
      borderColor={"gray-300"}
    >
      <Flex direction={"row"} justify={"space-between"} alignment={"center"}>
        <Link href={"/"}>
          <Flex direction={"row"} alignment={"center"}>
            <Icon source={ReportIcon} />
            <Spacer width={8} />
            <Text typo={"Text20Bold"}>TECHNERY</Text>
          </Flex>
        </Link>
        <Responsive
          mobileComponent={
            <GiHamburgerMenu size={24} style={{ cursor: "pointer" }} />
          }
          desktopComponent={
            <Flex direction={"row"} gap={24}>
              {MENU_LIST.map((item) => (
                <Link href={item.link} key={item.title}>
                  <Text cursor={"pointer"} typo={"Text16Medium"} hover={true}>
                    {item.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          }
        />
      </Flex>
    </Stack>
  );
};
