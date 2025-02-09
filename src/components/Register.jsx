import { useState } from "react";
import "./Register.css";

function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký ở đây
  };

  return (
    <div className="auth-container">
      <div
        className="auth-image"
        style={{
          backgroundImage: `url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/14/12/family.jpg')`,
        }}
      />
      <div className="auth-form">
        <h1>Start your journey here</h1>
        <p>Come and discovering new adventures with your little one</p>

        <form onSubmit={handleSubmit}>
          <div className="name-group">
            <input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign up
          </button>

          <div className="divider">
            <span>Or</span>
          </div>

          <button type="button" className="google-btn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s"
              alt="Google"
            />
            Continue with Google
          </button>
        </form>

        <div className="switch-auth">
          <p>Already a member?</p>
          <button onClick={onSwitchToLogin} className="switch-btn">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
