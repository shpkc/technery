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
  return `
      ${cssProperty}: ${values};
    `;
};
