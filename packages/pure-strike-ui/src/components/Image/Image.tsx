import React, { forwardRef } from "react";
import Styled from "./Image.styled";
import { ImageProps } from "./Image.types";

export const Image = forwardRef(
  (
    { src, width, height, borderRadius = "0px", alt, onLoad }: ImageProps,
    forwardRef
  ) => {
    const handleLoad = React.useCallback(() => {
      if (onLoad) onLoad();
    }, [onLoad]);

    return (
      <Styled
        src={src}
        width={width}
        height={height}
        borderRadius={borderRadius}
        alt={alt}
        onLoad={handleLoad}
      />
    );
  }
);
