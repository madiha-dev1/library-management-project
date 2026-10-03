import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function Topbar({ onMenuClick }) {

  const pageTitles = {
  "/": "Dashboard",
  "/assignbook": "Assign Book",
  "/returnbook": "Return Book",
  "/books": "Books",
  "/addbook": "Add Book",
  "/users": "Users",
  "/adduser": "Add User",
}

  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="d-flex justify-content-between align-items-center p-3 topbar" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}>
      
      {/* Left: Title */}
      <div className="d-flex align-items-center gap-3">
        <span className="d-md-none" onClick={onMenuClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </span>
        <h4 className="fw-bold mb-0">{currentTitle}</h4>
      </div>

      {/* Middle: Search */}
      <div className="input-group topbar-search" style={{ width: "300px" }}>
        <span className="input-group-text bg-white border-end-0">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search here..."
        />
      </div>

      {/* Right: Bell + Admin */}
      <div className="d-flex align-items-center gap-3">

        <div className="position-relative">
          <span style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
            style={{ backgroundColor: "#3B5BDB", fontSize: "10px" }}
          >
            3
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: "24px" }}>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <span>Admin</span>
          <span><FontAwesomeIcon icon={faAngleDown}/></span>
        </div>

      </div>

    </div>
  );
}

export default Topbar;