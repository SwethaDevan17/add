const { useState } = React;

function App() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Courses", "Assignments", "Profile"];

  return (
    <main className="page">
      <header className="hero">
        <h1>Student Hub</h1>
        <p>Your one-page student dashboard for classes, deadlines, and progress.</p>
        <div className="button-row">
          <button className="btn primary">Join Live Class</button>
          <button className="btn secondary">Download Notes</button>
          <button className="btn ghost">Contact Mentor</button>
        </div>
      </header>

      <section className="card">
        <h2>Quick Navigation</h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="content">
          {activeTab === "Overview" && (
            <p>
              Welcome back! Keep your attendance above 90%, review this week's
              lessons, and stay on top of your learning goals.
            </p>
          )}
          {activeTab === "Courses" && (
            <ul>
              <li>Mathematics - Algebra II</li>
              <li>Computer Science - Web Fundamentals</li>
              <li>English Literature - Modern Fiction</li>
            </ul>
          )}
          {activeTab === "Assignments" && (
            <ul>
              <li>React Component Exercise - Due Friday</li>
              <li>Essay Draft Submission - Due Monday</li>
              <li>Math Quiz Practice - Due Tomorrow</li>
            </ul>
          )}
          {activeTab === "Profile" && (
            <p>
              Student: Alex Parker | Semester: Spring 2026 | GPA: 3.8 | Status:
              Active
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
