// src/components/CalendarHeader.jsx
import { useCalendar } from "../hooks/useCalendar";

export default function CalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth } = useCalendar();

  return (
    <div className="flex justify-between items-center">
      <button onClick={goToPrevMonth} className="px-2 py-1 bg-gray-300 rounded">Prev</button>
      <h2 className="text-xl font-semibold">{currentMonth.format("MMMM YYYY")}</h2>
      <button onClick={goToNextMonth} className="px-2 py-1 bg-gray-300 rounded">Next</button>
    </div>
  );
}
