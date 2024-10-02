import React, { useState } from "react";
import "../css/JoinGroup.css";

function JoinGroup() {
  const [groupCode, setGroupCode] = useState("");

  const handleJoinGroup = () => {
    console.log("Joining Group with Code: ${groupCode}");
  };

  return (
    <div className="join-group-page">
      <h1>Join a Group</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Group Code:</label>
        <input
          type="text"
          value={groupCode}
          onChange={(e) => setGroupCode(e.target.value)}
          required
        />
        <button onClick={handleJoinGroup}>Join Group</button>
      </form>
    </div>
  );
}

export default JoinGroup;
