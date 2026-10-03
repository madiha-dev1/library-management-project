import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Store } from "react-notifications-component";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

function ReturnBook() {
  const { books, setBooks } = useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState("")

  // Only books that currently have copies issued out
  const assignedBooks = books.filter((b) => b.available < b.copies);

const handleReturnBook = () => {
  if (selectedBook === "") {
    Store.addNotification({
      title: "Error",
      message: "Please select an entry!",
      type: "danger",
      container: "top-right",
      insert: "top",
      dismiss: { duration: 3000 },
    });
    return;
  };

  const book = books.find((b) => b.id === Number(selectedBook));
  if (book.available >= book.copies) {
    Store.addNotification({
      title: "Error",
      message: "All copies of this book are already in the library!",
      type: "danger",
      container: "top-right",
      insert: "top",
      dismiss: { duration: 3000 },
    });
    return;
  }

 setBooks(
      books.map((b) =>
        b.id === Number(selectedBook)
          ? { ...b, available: b.available + 1 }
          : b
      )
    );

    Store.addNotification({
      title: "Success",
      message: "Book returned successfully!",
      type: "success",
      container: "top-right",
      insert: "top",
      dismiss: { duration: 3000 },
    });

    setSelectedBook("");
  }
 


  return (
    <div className="px-4 mt-3">
      <h5 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Return Book</h5>
      <p className="text-muted">Mark a currently assigned book as returned.</p>

      <div className="card p-4 shadow-sm mb-4">
        <label>Select Assigned Book / User</label>
        <select className="form-select mb-3" value={selectedBook}
  onChange={(e) => setSelectedBook(e.target.value)}>
          <option value="">Choose a book</option>
  {assignedBooks.map((book) => (
    <option key={book.id} value={book.id}>
      {book.title} ({book.copies - book.available} assigned)
    </option>
  ))}
        </select>

        <button 
          className="btn d-flex align-items-center gap-2" 
          style={{ backgroundColor: "#1B2A6B", color: "white", width: "fit-content" }}
          onClick={handleReturnBook}
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} /> Return Book
        </button>
      </div>

      <h5 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Currently Assigned</h5>

      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
<table className="table table-borderless">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {assignedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
               
                <td>
                  <span 
                    className="badge rounded-pill"
                    style={{ backgroundColor: "#E7EEFF", color: "#3B5BDB" }}
                  >
                    {book.copies - book.available}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      </div>

    </div>
  );
}

export default ReturnBook;