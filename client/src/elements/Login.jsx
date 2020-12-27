import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { login } from "../configs/services";
import "./Login.css";
// import { connect } from "react-redux";
// import { handleLogin } from "./../redux/action/Login/action.jsx";

function ModalLogin({ show, setShow, switchModal, dispatch, onHide }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const onSwitch = () => {
    setShow(false);
    switchModal(true);
  };
  const [errLogin, seterrLogin] = useState(false);
  useEffect(() => {
    if (errLogin === true) {
      setTimeout(() => {
        seterrLogin(false);
<<<<<<< HEAD
      }, 5000);
=======
      }, 6000);
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    }
  }, [errLogin]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
<<<<<<< HEAD

=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  const onLogin = (e) => {
    e.preventDefault();
    login(
      dispatch,
      {
        email: formData.email,
        password: formData.password,
      },
      seterrLogin
    );
  };

  const handleClose = () => setShow(false);
  return (
    <Modal
      backdrop="static"
      centered
      show={show}
      setShow={setShow}
      onHide={handleClose}
      size="md"
      className="modal-regist-log"
    >
      <Modal.Body>
        <div className="wrapper-form modal-bg">
          <h1 className="font">Login</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input "
            onChange={(e) => handleChange(e)}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={(e) => handleChange(e)}
            value={formData.password}
          />
<<<<<<< HEAD
          {errLogin && <p style={{ color: "red" }}>Invalid Login</p>}
=======
          {errLogin && (
            <p style={{ color: "red" }}>Wrong username or password</p>
          )}
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
          <button className="btn-login" onClick={onLogin}>
            LOGIN
          </button>
          <p className="switch">
            Don't have an account ? Klik{" "}
            <b className="b" onClick={onSwitch}>
              Here
            </b>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
