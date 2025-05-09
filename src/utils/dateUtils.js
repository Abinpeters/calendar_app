import dayjs from "dayjs";

export function formatDate(date) {
  return dayjs(date).format("YYYY-MM-DD");
}

export function isSameDay(date1, date2) {
  return dayjs(date1).isSame(dayjs(date2), "day");
}
