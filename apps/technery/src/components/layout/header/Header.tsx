import Link from "next/link";
import { Stack, Text, Flex, Spacer, Responsive } from "pure-strike-ui";
import { ZIndex } from "~foundation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiFlag } from "react-icons/fi";
import React from "react";
import { SideBar } from "./SideBar";
import { useRouter } from "next/navigation";
import { MENU_LIST } from "src/constants/menu";
import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_LINK } from "src/constants/link";

export const Header = () => {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = React.useState<boolean>(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const onClickMenu = (item) => {
    const { link, onClick } = item;
    if (onClick) {
      return onClick();
    }
    return router.push(link);
  };

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
            <FiFlag size={32} />
            <Spacer width={8} />
            <Text typo={"Text20Bold"}>TECHNERY</Text>
          </Flex>
        </Link>
        <Responsive
          mobileComponent={
            <Stack>
              <GiHamburgerMenu
                size={24}
                style={{ cursor: "pointer" }}
                onClick={openSideBar}
              />
              {isSideBarOpen && <SideBar closeSideBar={closeSideBar} />}
            </Stack>
          }
          desktopComponent={
            <Flex direction={"row"} gap={24} alignment={"center"}>
              <FaInstagram
                size={24}
                style={{ cursor: "pointer" }}
                onClick={() => window.open(INSTAGRAM_LINK)}
              />
              {MENU_LIST.map((item) => (
                <Text
                  cursor={"pointer"}
                  typo={"Text16Medium"}
                  hover={true}
                  onClick={() => onClickMenu(item)}
                  key={item.title}
                >
                  {item.title}
                </Text>
              ))}
            </Flex>
          }
        />
      </Flex>
    </Stack>
  );
};
