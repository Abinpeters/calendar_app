import { useState } from "react";
import dayjs from "dayjs";

export function useCalendar(events) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const daysInMonth = currentMonth.daysInMonth();
  const startOfMonth = currentMonth.startOf("month").day();

  const calendarDays = [];

  for (let i = 0; i < startOfMonth; i++) {
    calendarDays.push(null); // empty slots
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = currentMonth.date(day);
    calendarDays.push(date);
  }

  // Filter events for current month
  const monthEvents = events.filter(event =>
    dayjs(event.date).isSame(currentMonth, "month")
  );

  return {
    currentMonth,
    calendarDays,
    monthEvents,
    goToNextMonth,
    goToPreviousMonth
  };
}
