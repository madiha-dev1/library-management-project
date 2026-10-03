import { createContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", copies: 10, available: 4 },
    { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self-Help", copies: 8, available: 5 },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", copies: 6, available: 2 },
    { id: 4, title: "The 5 AM Club", author: "Robin Sharma", category: "Self-Help", copies: 5, available: 3 },
    { id: 5, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", copies: 7, available: 6 },
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

