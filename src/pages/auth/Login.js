import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Form, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

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

  const {  register, handleSubmit, formState: { errors } } = useForm();

  return <>
    <Head title="Login" />
    <header>
    <div className="container">
      <div className="logo">
        <img src="https://ebanking.omnibsic.com.gh/images/common/logo.svg" alt="Bank Logo" className="logo-img" style={{height:"40px"}}/>
      </div>
      <nav>
        {/* <a href="#">SWITCH</a> */}
        <a href="#">REGISTER</a>
        <a href="#">CONTACT US</a>
      </nav>
    </div>
  </header>

  <main>
    <section>
      <div className="container">
        <div className="form-container">
          <h2>Welcome to Online Banking!</h2>
          <p>Enter your username to continue</p>
          <form action="#">
            <input type="text" id="username" name="username" placeholder="Username"/>
            <button type="submit">Continue</button>
          </form>
          <p><a href="#">New User? Register Now</a></p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div className="container">
      <div>
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms & Conditions</a>
      </div>
      <div>
        &copy; 2024 CoronationMB. All Rights Reserved.
      </div>
    </div>
  </footer>
  </>;
};
export default Login;
