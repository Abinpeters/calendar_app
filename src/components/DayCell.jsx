import React from "react";
import EventItem from "./EventItem";
import './DayCell.css';

export default function DayCell({ date, events, isToday }) {
  return (
    <div className={`day-cell ${isToday ? "today" : ""}`}>
      {date && <div className="date-number">{date.date()}</div>}
      {events.map((event, i) => (
        <EventItem key={i} event={event} />
      ))}
    </div>
  );
}
