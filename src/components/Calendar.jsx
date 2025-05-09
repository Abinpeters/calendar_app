import React, { useState } from "react";
import { useCalendar } from "../hooks/useCalendar";
import DayCell from "./DayCell";
import dayjs from "dayjs";
import initialEvents from "../data/events.json";
import AddItem from "./AddItem";
import TodayEvents from "./TodayEvents"; // <-- New import
import "./Calendar.css";

export default function Calendar() {
  const [allEvents, setAllEvents] = useState(initialEvents);

  const {
    currentMonth,
    calendarDays,
    monthEvents,
    goToNextMonth,
    goToPreviousMonth,
  } = useCalendar(allEvents);

  const getEventsForDate = (date) =>
    monthEvents.filter((event) => dayjs(event.date).isSame(date, "day"));

  const handleAddEvent = (newEvent) => {
    setAllEvents((prev) => [...prev, newEvent]);
  };

  return (
    
    <div className="calendar-container">
      <h1 className="calendar-title ">My Calendar</h1>
            <TodayEvents events={allEvents} /> {/* 🔹 Modular TodayEvents */}
            <AddItem onAdd={handleAddEvent} />
      <div className="calendar-header">
        <button onClick={goToPreviousMonth} className="nav-button">← Prev</button>
        <h2 className="calendar-title">{currentMonth.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth} className="nav-button">Next →</button>
      </div>

      


      <div className="calendar-day-labels">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-label">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarDays.map((date, idx) => (
          <DayCell
            key={idx}
            date={date}
            events={date ? getEventsForDate(date) : []}
            isToday={date?.isSame(dayjs(), "day")}
          />
        ))}
      </div>
    </div>
  );
}
