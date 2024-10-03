import React, { useState } from "react";

function EventsPage({ user, events }: { user: any; events: any[] }) {
  const [newEventUrl, setNewEventUrl] = useState("");

  const handleCreateEvent = () => {
    window.open("https://docs.google.com/forms/u/0/create", "_blank");
    const formUrl = prompt("Paste the Google Form URL here once created:");
    if (formUrl) {
      setNewEventUrl(formUrl);
    }
  };

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        {user.isGroupCreator && (
          <button className="create-event-button" onClick={handleCreateEvent}>
            Create
          </button>
        )}
      </div>

      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index}>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              {event.title}
            </a>
          </li>
        ))}
        {newEventUrl && (
          <li>
            <a href={newEventUrl} target="_blank" rel="noopener noreferrer">
              Newly Created Event
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default EventsPage;
