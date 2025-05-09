import React from "react";
import dayjs from "dayjs";
import "./TodayEvents.css";

export default function TodayEvents({ events }) {
  const today = dayjs().format("YYYY-MM-DD");
  const todayEvents = events.filter(
    (event) => dayjs(event.date).format("YYYY-MM-DD") === today
  );

  return (
    <div className="today-events">
      <h3>Events Today</h3>
      {todayEvents.length === 0 ? (
        <p>No events today.</p>
      ) : (
        <ul>
          {todayEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.title}</strong> at {event.time} ({event.duration})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
