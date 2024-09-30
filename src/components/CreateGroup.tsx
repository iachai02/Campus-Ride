import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [groupCode, setGroupCode] = useState("");

  const handleCreateGroup = () => {
    const generatedCode = uuidv4().substring(0, 6);
    setGroupCode(generatedCode);

    console.log(`Group Created: ${groupName}, Code: ${generatedCode}`);
  };

  return (
    <div className="create-group-page">
      <h1>Create a Group</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
        <button onClick={handleCreateGroup}>Create Group</button>
      </form>
      {groupCode && (
        <div>
          <h2>Group Code: {groupCode}</h2>
          <p>Share this code with others to join your group.</p>
        </div>
      )}
    </div>
  );
}

export default CreateGroup;
