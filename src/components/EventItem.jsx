import React from "react";
import './EventItem.css';

export default function EventItem({ event }) {
  return (
    <div className="event-item">
      <div className="event-title">{event.title}</div>
      <div className="event-time">
        {event.time} ({event.duration})
      </div>
    </div>
  );
}
