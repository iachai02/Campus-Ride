import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateEventForm({ groups }: { groups: string[] }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [questions, setQuestions] = useState([
    { type: "short-answer", question: "" },
  ]);

  function handleAddQuestion(type: string) {
    setQuestions([...questions, { type, question: "" }]);
  }

  function handleQuestionChange(index: number, value: string) {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  }

  function handleCreateEvent() {
    console.log({
      group: selectedGroup,
      title: eventTitle,
      questions,
    });
  }

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <label>Group:</label>
      <select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option value="" disabled>
          Select Group
        </option>
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      <label>Event Title:</label>
      <input
        type="text"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />

      <h3>Questions</h3>
      {questions.map((q, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter question"
            value={q.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          />
          <p>Type: {q.type}</p>
        </div>
      ))}

      <button onClick={() => handleAddQuestion("short-answer")}>
        Add Short Answer
      </button>
      <button onClick={() => handleAddQuestion("multiple-choice")}>
        Add Multiple Choice
      </button>
      <button onClick={() => handleAddQuestion("checkbox")}>
        Add Checkbox
      </button>
      <button onClick={() => handleAddQuestion("dropdown")}>
        Add Dropdown
      </button>

      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}

export default CreateEventForm;
