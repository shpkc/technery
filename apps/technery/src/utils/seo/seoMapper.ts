import { DEFAULT_SEO } from "src/constants/seo";

export const seoMapper = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return {
    ...DEFAULT_SEO,
    title: `${title} | Technery`,
    description: `${description} | Technery`,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: `${title} | Technery`,
      description: `${description} | Technery`,
    },
  };
};
