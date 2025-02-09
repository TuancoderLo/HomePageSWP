import React, { useState } from "react";
import "./Login.css";
import { FaHome } from "react-icons/fa";

// Dữ liệu mẫu cho users
const MOCK_USERS = [
  {
    email: "member@example.com",
    password: "member123",
    isAdmin: false,
    name: "Member User",
  },
  {
    email: "admin@example.com",
    password: "admin123",
    isAdmin: true,
    name: "Admin User",
  },
];

function Login({ onSwitchToRegister, onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Kiểm tra user trong dữ liệu mẫu
    const user = MOCK_USERS.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      onLogin(user);
    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="auth-container">
      <div
        className="auth-image"
        style={{
          backgroundImage: `url('https://www.anhngu.usc.edu.vn/Data/Sites/1/News/4358/ielts-speaking-topic-family.jpg')`,
        }}
      />
      <div className="auth-form">
        <div className="home-icon">
          <FaHome onClick={() => (window.location.href = "/")} />
        </div>
        <div className="form-content">
          <div className="title-section">
            <h1>Welcome Back</h1>
            <p>
              Come and discovering new adventures
              <br />
              with us
            </p>
          </div>

          <div className="form-section">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="submit-btn">
                Đăng nhập
              </button>
              <div className="divider">
                <span>or</span>
              </div>
              <button type="button" className="google-btn">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s"
                  alt="Google"
                />
                Continue with Google
              </button>
              <div className="bottom-divider"></div>
            </form>
          </div>

          <div className="bottom-section">
            <div className="register-section">
              <p>First time visit?</p>
              <button onClick={onSwitchToRegister} className="register-btn">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
