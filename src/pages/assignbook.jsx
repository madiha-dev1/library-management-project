import { faBookBible } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import { UserContext } from "../context/UserContext";
import { BookContext } from "../context/BookContext";
import { useContext} from "react";

function AssignBook() {
  const { books, setBooks } = useContext(BookContext);
  const { users } = useContext(UserContext);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAssign = () => {
    if (!selectedBook || !selectedUser || !dueDate) {
      Store.addNotification({
        title: "Error",
        message: "Please fill all the fields before assigning the book.",
        type: "danger",
        insert: "top",
        container: "top-right",
        dismiss: { duration: 3000 },
      });
      return;
    }
     const book = books.find((b) => b.id === Number(selectedBook));

     if (book.available <= 0) {
    Store.addNotification({
      title: "Error",
      message: "No copies available for this book!",
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: { duration: 3000 },
    });
    return;
  }

  setBooks(
    books.map((b) =>
      b.id === Number(selectedBook)
        ? { ...b, available: b.available - 1 }
        : b
    )
  );

  Store.addNotification({
    title: "Success",
    message: `Book assigned to ${selectedUser} successfully!`,
    type: "success",
    insert: "top",
    container: "top-right",
    dismiss: { duration: 3000 },
  });

  setSelectedBook("");
  setSelectedUser("");
  setDueDate("");
};


   

  return (
    <div className="px-4 mt-3">
      <h4 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Assign Book</h4>
      <p className="text-muted">Issue a book to a registered library member.</p>

      <div className="card p-4 shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Select Book</label>
            <select
              className="form-select"
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="">Choose a book</option>
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title} ({book.available} available)
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <label>Select User</label>
          <select
            className="form-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Choose a user</option>
           {users.map((user)=>(
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
           ))}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label>Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <button
        className="btn d-flex align-items-center gap-2"
        style={{ backgroundColor: "#1B2A6B", color: "white" }}
        onClick={handleAssign}
      >
        <FontAwesomeIcon icon={faBookBible} /> Assign Book
      </button>
    </div>
  );
 };

export default AssignBook;
