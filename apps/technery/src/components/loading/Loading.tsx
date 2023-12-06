import { Stack } from "pure-strike-ui";
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = () => {
  return (
    <Stack margin={"0 auto"} width={"100px"} padding={"100px 0 0 0"}>
      <ClipLoader size={100} color={"#1E9EFF"} />
    </Stack>
  );
};
