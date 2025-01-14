import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <UserContext.Provider value={{ users, setUsers, loading, setLoading, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
