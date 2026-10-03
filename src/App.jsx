 import { useState, useEffect } from "react";
 import { BookProvider } from "./context/BookContext.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './components/sidebar.jsx';
import Topbar from './components/topbar.jsx';
import AssignBook from './pages/assignbook.jsx';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './pages/dashboard.jsx';
import ReturnBook from './pages/returnbook.jsx';
import Books from './pages/books.jsx';
import AddBook from "./pages/addbook.jsx";
import { ReactNotifications } from 'react-notifications-component';
import Users from "./pages/users.jsx";
import AddUser from "./pages/adduser.jsx";
import { UserProvider } from "./context/UserContext.jsx";
function App() {

const [isOpen, setIsOpen] = useState(true);

const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
  const onResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) setMobileOpen(false);
  };
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);

const toggleSidebar = () => {
  if (isMobile) {
    setMobileOpen(!mobileOpen);
  } else {
    setIsOpen(!isOpen);
  }
};
  return (
     <UserProvider>
      <BookProvider>
    <div className="d-flex">
      <ReactNotifications/>
    {isMobile && mobileOpen && <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)} />}
    <Sidebar isOpen={isMobile ? true : isOpen} toggleSidebar={toggleSidebar} mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />

    <div style={{flex:1, minWidth:0}}>
       <Topbar onMenuClick={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assignbook" element={<AssignBook />} />
          <Route path="/returnbook" element={<ReturnBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
        </Routes>
    </div>
    </div>
    </BookProvider>
    </UserProvider>
  )
}

export default App;