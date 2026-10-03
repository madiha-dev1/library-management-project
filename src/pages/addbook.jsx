import { useContext, useState } from "react";
import 'react-notifications-component/dist/theme.css';
import { BookContext } from "../context/BookContext";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Store } from "react-notifications-component";

 function AddBook() {
  const { books, setBooks } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuther] = useState("");
  const [category, setCategory] = useState("");
  const [copies, setCopies] = useState("");

  const handleAddBook = () => {
    if (title === "" || author === "" || category === "" || copies === "") {
      Store.addNotification({
        title: "Error",
        message: "Please fill all fields!",
        type: "danger",
        insert: "top",
        container: "top-right",
        dismiss: { duration: 3000 },
      });
    } else if (Number(copies) < 1) {
      Store.addNotification({
        title: "Error",
        message: "Number of copies must be at least 1!",
        type: "danger",
        insert: "top",
        container: "top-right",
        dismiss: { duration: 3000 },
      });
    } else {
      const newBook = {
        id: books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1,
        title: title,
        author: author,
        category: category,
        copies: Number(copies),
        available: Number(copies),
      };

      setBooks([...books, newBook]);

      Store.addNotification({
        title: "Success",
        message: "Book Added Successfully!",
        type: "success",
        insert: "top",
        container: "top-right",
        dismiss: { duration: 3000 },
      });

      setTitle("");
      setAuther("");
      setCategory("");
      setCopies("");
    }
  };

  return (
    <div className="px-4 mt-4 card p-4 shadow-sm mx-3">
      <h4 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Add Book</h4>
      <p className="text-muted">Add a new title to the Library Catalog.</p>

      <div className="card p-4 shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Book Title</label>
            <input type="text" className="form-control" placeholder="e.g. The Alchemist" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label>Author</label>
            <input type="text" className="form-control" placeholder="e.g. Paulo Coelho" value={author} onChange={(e) => setAuther(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label>Category</label>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option>Fiction</option>
            <option>Finance</option>
            <option>Self-Help</option>
          </select>
        </div>
        <div className="col-md-6">
          <label>Number of Copies</label>
          <input type="number" className="form-control" placeholder="e.g. 5" value={copies} onChange={(e) => setCopies(e.target.value)} />
        </div>
      </div>

      <button 
        className="btn d-flex align-items-center gap-2 mt-3 ms-3" 
        style={{ backgroundColor: "#1B2A6B", color: "white", width: "fit-content" }}
        onClick={handleAddBook}
      >
        <FontAwesomeIcon icon={faCirclePlus} /> Add Book
      </button>
    </div>
  );
}


export default AddBook;