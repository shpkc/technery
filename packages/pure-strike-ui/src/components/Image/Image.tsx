import React, { forwardRef } from "react";
import Styled from "./Image.styled";
import { ImageProps } from "./Image.types";

export const Image = forwardRef(
  (
    {
      src,
      width,
      height,
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      alt,
      onLoad,
    }: ImageProps,
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
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        alt={alt}
        onLoad={handleLoad}
      />
    );
  }
);
