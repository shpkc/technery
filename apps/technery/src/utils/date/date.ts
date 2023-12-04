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

export const formatDaysAgoFromDate = (targetDate: string): string => {
  const currentDate: Date = new Date();
  const givenDate: Date = new Date(targetDate);

  const millisecondsPerDay: number = 24 * 60 * 60 * 1000;

  const daysDifference: number = Math.floor(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerDay
  );

  return daysDifference === 0 ? "오늘" : `${daysDifference}일 전`;
};
