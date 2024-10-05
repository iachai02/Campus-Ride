import React, { useState } from "react";
import "../css/EventsPage.css";

function EventsPage({ user }: { user: any }) {
  const [formUrl, setFormUrl] = useState("");
  const [postedEvents, setPostedEvents] = useState([
    {
      title: "Event 1",
      postedBy: "User 1",
      group: "Group 1",
      createdAt: new Date(),
      url: "https://forms.gle/5zvrR1upTRRTzgBM9",
    },
    {
      title: "Event 2",
      postedBy: "User 2",
      group: "Group 2",
      createdAt: new Date(),
      url: "https://forms.gle/qd6hgg718PKcZNPN8",
    },
    {
      title: "Event 3",
      postedBy: "User 2",
      group: "Group 2",
      createdAt: new Date(),
      url: "https://forms.gle/qd6hgg718PKcZNPN8",
    },
    {
      title: "Event 4",
      postedBy: "User 2",
      group: "Group 2",
      createdAt: new Date(),
      url: "https://forms.gle/qd6hgg718PKcZNPN8",
    },
  ]); // store the events, including newly posted ones
  const [eventTitle, setEventTitle] = useState("");
  const [filterGroup, setFilterGroup] = useState("");

  const handleCreateEvent = async () => {
    // opens a blank google form creation page in a new tab
    window.open("https://docs.google.com/forms/u/0/create", "_blank");

    // prompt the user to past the URL after creating the form
    alert("After creating the form, copy the URL and paste it below.");
  };

  const handlePostEvent = () => {
    if (formUrl.trim() === "" || eventTitle.trim() === "") {
      alert(
        "Please fill in both the event title and paste a valid Google Form URL"
      );
      return;
    }

    const newEvent = {
      title: eventTitle,
      postedBy: "User 1",
      group: "Group 1",
      createdAt: new Date(),
      url: formUrl,
    };

    // add the new event to the list
    setPostedEvents([...postedEvents, newEvent]);
    setEventTitle("");
    setFormUrl("");
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterGroup(e.target.value);
  };

  const filteredEvents = filterGroup
    ? postedEvents.filter((event) => event.group === filterGroup)
    : postedEvents;

  return (
    <div className="events-page">
      <div className="header">
        <div className="left-header">
          <h1 className="events-title">Events</h1>
          <select
            className="filter-dropdown"
            value={filterGroup}
            onChange={handleFilterChange}
          >
            <option value="">All Groups</option>
            <option value="Group 1">Group 1</option>
            <option value="Group 2">Group 2</option>
            {/* Add other group options dynamically as needed */}
          </select>
        </div>
        <div className="right-header">
          {user.isGroupCreator && (
            <>
              <button
                className="create-event-button"
                onClick={handleCreateEvent}
              >
                Create
              </button>
              <div className="post-event">
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Enter event title"
                />
                <input
                  type="text"
                  value={formUrl}
                  onChange={(e) => setFormUrl(e.target.value)}
                  placeholder="Paste the Google Form URL here"
                />
                <button onClick={handlePostEvent}>Post</button>
              </div>
            </>
          )}
        </div>
      </div>

      <ul className="event-list">
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="event-item-link"
            >
              <div className="event-item">
                <h3>{event.title}</h3>
                <p>Posted by: {event.postedBy}</p>
                <p>Group: {event.group}</p>
                <p>Posted on: {new Date(event.createdAt).toLocaleString()}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
