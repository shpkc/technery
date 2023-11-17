import { Flex, Stack, Image } from "pure-strike-ui";

export const TechPostItem = () => {
  return (
    <Stack>
      <Flex>
        <Image
          src={
            "https://blog.deering.co/content/images/size/w1920/2023/08/meta-1.png"
          }
          width={160}
          height={160}
          style={{ objectFit: "contain" }}
        />
      </Flex>
    </Stack>
  );
};
