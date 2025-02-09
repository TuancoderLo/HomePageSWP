import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Guest from "./components/Guest";
import Member from "./components/Member";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("guest"); // 'guest', 'login', 'register', 'dashboard', 'member'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (userData) => {
    // Ở đây bạn sẽ xử lý logic đăng nhập
    setIsAuthenticated(true);
    if (userData.isAdmin) {
      setIsAdmin(true);
      setCurrentPage("dashboard");
    } else {
      setCurrentPage("member");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentPage("guest");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <Login
            onSwitchToRegister={() => setCurrentPage("register")}
            onLogin={handleLogin}
          />
        );
      case "register":
        return <Register onSwitchToLogin={() => setCurrentPage("login")} />;
      case "dashboard":
        return isAdmin ? <Dashboard onLogout={handleLogout} /> : <Member />;
      case "member":
        return <Member />;
      default:
        return <Guest />;
    }
  };

  return (
    <div className="app-container">
      <Header
        onJoinClick={() => setCurrentPage("login")}
        onSignUpClick={() => setCurrentPage("register")}
        onLogoClick={() => setCurrentPage(isAuthenticated ? "member" : "guest")}
        onLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      {renderPage()}
    </div>
  );
}

export default App;
