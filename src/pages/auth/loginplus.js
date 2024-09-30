import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../images/logo.png"; // Replace with your actual logo image
import "./Login.css"; // Custom CSS file

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (formData) => {
    setLoading(true);
    const loginName = "info@softnio.com";
    const pass = "123456";
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem("accessToken", "token");
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 1000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="login-container">
      {/* Promo Section */}
      <div className="promo-section">
        <div className="promo-content">
          <h1>Swift</h1>
          <h2>Build digital products with:</h2>
          <ul>
            <li>All-in-one tool</li>
            <p>Amazing Features to make your life easier & work efficient</p>
            <li>Easily add & manage your services</li>
            <p>It brings together your tasks, projects, timelines, files, and more</p>
          </ul>
          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/about">About Us</a>
            <a href="/faqs">FAQs</a>
          </div>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="login-section">
        <div className="login-panel">
          <div className="login-form-container">
            {/* <h2>Sign In</h2>
            <p>Free access to our dashboard.</p>
            <button className="google-signin">Sign in with Google</button>
            <div className="separator">
              <span>OR</span>
            </div> */}
            {errorVal && <div className="login-error">{errorVal}</div>}
            <form className="login-form" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  {...register('name', { required: "This field is required" })}
                  placeholder="name@example.com"
                  className="form-input"
                />
                {errors.name && <span className="form-error">{errors.name.message}</span>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type={passState ? "text" : "password"}
                  {...register('passcode', { required: "This field is required" })}
                  placeholder="Enter the password"
                  className="form-input"
                />
                {errors.passcode && <span className="form-error">{errors.passcode.message}</span>}
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              </div>
              <div className="form-group">
                <button className="form-button" type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Sign In"}
                </button>
              </div>
            </form>
            <p className="login-note">
              Don't have an account yet? <a href="/register">Sign up here</a>
            </p>
          </div>
        </div>
        <div className="blue-slim-box"></div>
      </div>
    </div>
  );
};

export default Login;
