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
