import { Flex, Stack, Text } from "pure-strike-ui";
import { ZIndex } from "~foundation";
import { IoCloseSharp } from "react-icons/io5";
import { SlideFromRight } from "~foundation/keyframes/keyframes";
import { useRouter } from "next/navigation";
import { MENU_LIST } from "src/constants/menu";
import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_LINK } from "src/constants/link";

export const SideBar = ({ closeSideBar }: { closeSideBar: () => void }) => {
  const router = useRouter();
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
      backgroundColor={"black-origin-50"}
      left={0}
      top={0}
      height={"100vh"}
      width={"100%"}
      zIndex={ZIndex.SideBar}
      onClick={closeSideBar}
    >
      <Flex direction={"column"} alignment={"flex-end"} height={"100%"}>
        <Stack
          position={"fixed"}
          backgroundColor={"white"}
          height={"100vh"}
          width={"75%"}
          onClick={(e) => e.stopPropagation()}
          css={`
            animation: ${SlideFromRight} 0.4s ease-in-out;
          `}
        >
          <Stack padding={"16px"} height={"auto"}>
            <Flex direction={"column"} alignment={"flex-end"}>
              <IoCloseSharp onClick={closeSideBar} size={32} />
            </Flex>
          </Stack>
          <Stack padding={"42px 20px"}>
            {MENU_LIST.map((item) => (
              <Stack
                padding={"0 0 12px 0"}
                key={item.title}
                height={"auto"}
                borderBottom={true}
                borderColor={"gray-200"}
                borderWidth={1}
                margin={"0 0 12px 0"}
                onClick={(item) => onClickMenu(item)}
              >
                <Text typo={"Text20Bold"}>{item.title}</Text>
              </Stack>
            ))}
            <FaInstagram
              size={32}
              style={{ cursor: "pointer", marginTop: "12px" }}
              onClick={() => window.open(INSTAGRAM_LINK)}
            />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};
