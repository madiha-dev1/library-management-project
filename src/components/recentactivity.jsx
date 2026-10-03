function RecentActivity() {
  const activities = [
    { id: 1, title: "The Alchemist", user: "Ali Khan", action: "Assigned", date: "25 May 2025", status: "Assigned" },
    { id: 2, title: "Rich Dad Poor Dad", user: "Sara Ahmed", action: "Returned", date: "24 May 2025", status: "Returned" },
    { id: 3, title: "Atomic Habits", user: "Usman Ali", action: "Assigned", date: "23 May 2025", status: "Assigned" },
    { id: 4, title: "Think and Grow Rich", user: "Hina Fatima", action: "Returned", date: "22 May 2025", status: "Returned" },
  ];

  const getStatusStyle = (status) => {
    if (status === "Assigned") {
      return { backgroundColor: "#E7EEFF", color: "#3B5BDB" };
    } else {
      return { backgroundColor: "#E9F7EF", color: "#2F9E44" };
    }
  };

  return (
    <div className="px-4 mt-3">
      <h5 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Recent Activity</h5>

      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
<table className="table table-borderless">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>User Name</th>
              <th>Action</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.title}</td>
                <td>{activity.user}</td>
                <td>{activity.action}</td>
                <td>{activity.date}</td>
                <td>
                  <span 
                    className="badge rounded-pill"
                    style={getStatusStyle(activity.status)}
                  >
                    {activity.status}
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

export default RecentActivity;