import { createContext, useState } from "react";

//  const UserContext = createContext();
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Member", booksIssued: 2 },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Member", booksIssued: 1 },
    { id: 3, name: "Usman Ali", email: "usman@example.com", role: "Admin", booksIssued: 0 },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}


// export default UserContext;