import React, { useState } from "react";

const JobRoleSelection = () => {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const jobRoles = ["Software Engineer", "Data Analyst", "UI/UX Designer", "AI Developer"];

  const filtered = jobRoles.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Select Job Role</h2>
      <input
        type="text"
        placeholder="Search role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((role) => (
          <li key={role} onClick={() => setSelectedRole(role)}>
            {role}
          </li>
        ))}
      </ul>
      <p>Selected Role: {selectedRole}</p>
    </div>
  );
};

export default JobRoleSelection;