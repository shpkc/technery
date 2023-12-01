export const dateHelper = () => {
  const today = new Date();

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const formattedDate =
    oneMonthAgo.getFullYear() +
    "." +
    ("0" + (oneMonthAgo.getMonth() + 1)).slice(-2) +
    "." +
    ("0" + oneMonthAgo.getDate()).slice(-2);

  return { oneMonthAgo: formattedDate };
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
