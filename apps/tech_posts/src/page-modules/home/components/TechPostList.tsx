import { Flex, Grid, Stack, TechCard } from "pure-strike-ui";

export const TechPostList = () => {
  return (
    <Stack width={1100} margin={"0 auto"}>
      <Grid>
        <TechCard thumbnail={"https://return-fetch.myeongjae.kim/meta.png"} />
        <TechCard
          thumbnail={
            "https://media.licdn.com/dms/image/sync/D5627AQGqsokVOcQ22g/articleshare-shrink_800/0/1699234532562?e=1700809200&v=beta&t=H94lT_wn6P37cwj7zGACuZ7Lb6odQS-42Rkl_JsNNeQ"
          }
        />
        <TechCard
          thumbnail={
            "https://media.licdn.com/dms/image/sync/D5627AQFjSdCpyHqXBw/articleshare-shrink_800/0/1700054798110?e=1700809200&v=beta&t=G458NrhcDBTpNqjODRVnoDaHS6v2SQxE1F84xe4n7g8"
          }
        />
        <TechCard
          thumbnail={
            "https://media.licdn.com/dms/image/sync/D5627AQG6UVYMg3YexQ/articleshare-shrink_800/0/1699502665922?e=1700809200&v=beta&t=5PWkFcwUmmdYgIrTWCTEimqxddN21M07Zw1M_DgNLlA"
          }
        />
      </Grid>
    </Stack>
  );
};
