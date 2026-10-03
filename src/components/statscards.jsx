import StatsCard from "./statscard";
import { faArrowRotateLeft, faBook, faBookBible, faUsers } from "@fortawesome/free-solid-svg-icons";

function StatsCards() {
  return (
    <div className="row g-3 px-4">
      <StatsCard 
        icon={faBook} 
        value="120" 
        title="Total Books" 
       bgColor="#E7EEFF"
        iconColor="#3B5BDB"
      />

      <StatsCard 
        icon={faUsers} 
        value="35" 
        title="Total Users" 
       bgColor="#E3F9E5"
       iconColor="#2F9E44"
      />

      <StatsCard 
        icon={faBookBible} 
        value="18" 
        title="Books Assigned" 
        bgColor="#FFF1DE"
        iconColor="#E8590C"
      />

      <StatsCard 
        icon={faArrowRotateLeft} 
        value="12" 
        title=" Books Returned" 
        bgColor="#F3E8FF"
        iconColor="#9C36B5"
      />
    </div>
  );
}

export default StatsCards;