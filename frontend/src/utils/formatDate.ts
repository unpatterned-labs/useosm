export const parseDate = (str: string): Date => {
  const [d, m, y] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const formatSingleDate = (str: string): string => {
  const date = parseDate(str);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatDateRange = (startStr: string, endStr: string): string => {
  const start = parseDate(startStr);
  const end = parseDate(endStr);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = end.toLocaleDateString("en-GB", { month: "long" });
  const year = end.getFullYear();

  return `${startDay}–${endDay} ${month}, ${year}`;
};

export const formatTimeLineDate = (
  startStr: string,
  endStr: string,
): string => {
  if (startStr === endStr) {
    return formatSingleDate(startStr);
  } else {
    return formatDateRange(startStr, endStr);
  }
};
