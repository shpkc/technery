import { PER_PAGE } from "src/constants/page";
import { getMethod } from "src/utils/apis/method/getMethod";
import { dateHelper } from "src/utils/date/date";

// NOTE : 무한스크롤 30개씩 불러오기, 최대 3개월 전 포스팅
export const getPostList = ({ pageParam, category }) => {
  const hasCategory = category !== "";
  const { threeMonthAgo } = dateHelper();

  return getMethod({
    url: `posts?post_created_at=gt.${threeMonthAgo}&order=post_created_at.desc&limit=${PER_PAGE}&offset=${
      (pageParam - 1) * PER_PAGE
    }${hasCategory ? `&category=plfts.${category}` : ""}`,
  })();
};
