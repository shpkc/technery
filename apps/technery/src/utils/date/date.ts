export const dateHelper = () => {
  const today = new Date();

  const threeMonthAgo = new Date();
  threeMonthAgo.setMonth(today.getMonth() - 3);

  const formattedDate =
    threeMonthAgo.getFullYear() +
    "." +
    ("0" + (threeMonthAgo.getMonth() + 1)).slice(-2) +
    "." +
    ("0" + threeMonthAgo.getDate()).slice(-2);

  return { threeMonthAgo: formattedDate };
};

export const formatBetweenTime = (targetDate: string): string => {
  const today = new Date();
  const timeValue = new Date(targetDate);
  const betweenTime = Math.floor(
    ((today as any) - (timeValue as any)) / (1000 * 60)
  );

  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) return `${betweenTime}분전`;
  if (betweenTime / 60 < 24) return `${Math.floor(betweenTime / 60)}시간전`;
  if (betweenTime / (60 * 24) < 365)
    return `${Math.floor(betweenTime / (60 * 24))}일전`;

  return `${Math.floor(betweenTime / (60 * 24 * 365))}년전`;
};
