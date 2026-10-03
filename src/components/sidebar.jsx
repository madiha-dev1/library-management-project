import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faArrowRotateLeft, faBook, faBookBible, faBookOpen, faDashboard, faUserPlus, faUsers, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar, mobileOpen, closeMobile }) {

    return (
        <div className={'d-flex flex-column p-3 text-white app-sidebar' + (mobileOpen ? ' mobile-open' : '')} 
             style={{ 
               backgroundColor: '#0a1a4a', 
               minHeight: "100vh", 
               width: isOpen ? "250px" : "80px",
               transition: "width 0.3s ease"
             }}>

            <div className="d-flex align-items-center justify-content-between fw-semibold">
                <div className="d-flex align-items-center">
                    <span><FontAwesomeIcon icon={faBookOpen} size="xl" /></span>
                    {isOpen && <h4 className="fw-semiBold ms-2 mb-0">Library Management System</h4>}
                </div>

                <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faBars} size="xl"   />
                </span>
            </div>

            <ul className="nav nav-pills flex-column mt-3" onClick={closeMobile}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faDashboard}/> {isOpen && "Dashboard"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/assignbook" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faBookBible} /> {isOpen && "Assign Book"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/returnbook" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faArrowRotateLeft} /> {isOpen && "Return Book"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/books" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faBook} /> {isOpen && "Books"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/addbook" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faAdd} /> {isOpen && "Add Book"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faUsers} /> {isOpen && "Users"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/adduser" className="nav-link" style={{color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faUserPlus} /> {isOpen && "Add User"}
                    </Link>
                </li>
            </ul>

            <div className="mt-auto text-center">
                {isOpen && "©Library Management System"}
            </div>
        </div>
    )
}

export default Sidebar;