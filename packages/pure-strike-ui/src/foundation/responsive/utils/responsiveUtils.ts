import { MediaQuery } from "../mediaQuery/mediaQuery";

// NOTE : 반응형 배열로 처리 (모바일, 태블릿, 데스크탑 순서대로)
export const getResponsiveStyles = (cssProperty, values) => {
  const isArray = Array.isArray(values);
  if (isArray) {
    return `
        @media (min-width: ${MediaQuery.mobile}) {
          ${cssProperty} : ${values[0]};
        }
        @media (min-width: ${MediaQuery.desktop}) {
          ${cssProperty} : ${values[1]};
        }
      `;
  }
  // NOTE : string 형식이면 value 그대로 사용, 아니면 px 붙여서 사용
  const convertedValues = typeof values === "string" ? values : values + "px";
  return `
      ${cssProperty}: ${convertedValues};
    `;
};
