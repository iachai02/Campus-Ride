import React, { useState } from "react";
import "../css/EventList.css";

function EventList({ events, groups }: { events: any[]; groups: string[] }) {
  const [selectedGroup, setSelectedGroup] = useState("");

  function filterEventsByGroup() {
    return selectedGroup
      ? events.filter((event) => event.group === selectedGroup)
      : events;
  }

  return (
    <div className="event-list">
      <h2>Events</h2>
      <label>Filter by Group:</label>
      <select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option value="">All Groups</option>
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      <ul>
        {filterEventsByGroup().map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>Group: {event.group}</p>
            <p>Date: {event.date}</p>
            {/* Show event questions and details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
