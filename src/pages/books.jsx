import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

import {
  faCirclePlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Books() {
  const { books, setBooks } = useContext(BookContext);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="px-4 mt-4">
      <div className="card p-4 shadow-sm">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h4>Books</h4>
            <p className="text-muted mb-0">
              Manage your library's book catalog.
            </p>
          </div>

          <Link
            to="/addbook"
            className="btn d-flex align-items-center gap-2"
            style={{ backgroundColor: "#1B2A6B", color: "white" }}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
            Add Book
          </Link>
        </div>

        <div className="input-group" style={{ width: "300px", maxWidth: "100%" }}>
          <span className="input-group-text bg-white border-end-0">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search by title or author..."
            style={{ backgroundColor: "#f8f9fa" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card p-3 shadow-sm mt-3">
          <div className="table-responsive">
<table className="table table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Copies</th>
                <th>Available</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.copies}</td>
                  <td>
                    <span
                      className="badge rounded-pill"
                      style={{ backgroundColor: "#E9F7EF", color: "#2F9E44" }}
                    >
                      {book.available}
                    </span>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => handleDelete(book.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
        </div>
      </div>
    </div>
  );
}

export default Books;