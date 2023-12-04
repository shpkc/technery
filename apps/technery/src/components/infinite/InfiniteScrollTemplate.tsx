import React from "react";
import { InView } from "react-intersection-observer";

export const InfiniteScrollTemplate = ({
  children,
  nextPage,
}: {
  children: JSX.Element;
  queryKey?: string;
  currentCount: number;
  totalCount?: number;
  nextPage: () => void;
}) => {
  return (
    <React.Fragment>
      {children}
      <InView
        onChange={(inView) => {
          inView && nextPage();
        }}
      />
    </React.Fragment>
  );
};
