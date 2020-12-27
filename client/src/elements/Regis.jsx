import React, { useState, useEffect, useRef } from "react";
<<<<<<< HEAD
import { Modal } from "react-bootstrap";
import { register } from "../configs/services";
import "./Login.css";

function ModalRegister({ show, setShow, switchModal, dispatch }) {
=======
import { Modal, Overlay, Popover  } from "react-bootstrap";
import { register } from "../configs/services";
import "./Login.css";

function ModalRegister({ show, setShow, onHide, switchModal, dispatch }) {
 
const [showPopup, setShowPopup] = useState(false);
useEffect(() => {
    if (showPopup === true) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [showPopup]);
const [target, setTarget] = useState(null);
const ref = useRef(null);

>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [errRegis, seterrRegis] = useState(false);
  useEffect(() => {
    if (errRegis === true) {
      setTimeout(() => {
        seterrRegis(false);
      }, 3000);
    }
  }, [errRegis]);

  const onSwitch = () => {
    setShow(false);
    switchModal(true);
    setFormData({ email: "", password: "", fullName: "" });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onRegister = (e) => {
    e.preventDefault();
    register(dispatch, formData, seterrRegis);
<<<<<<< HEAD
=======
    setShowPopup(!showPopup)
    setTarget(e.target)
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    console.log(onRegister);
  };
  const handleClose = () => setShow(false);

  return (
<<<<<<< HEAD
=======
    <>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    <Modal
      backdrop="static"
      centered
      show={show}
      setshow={setShow}
      onHide={handleClose}
      size="md"
      className="modal-regist-log "
    >
      <Modal.Body>
        <div className="wrapper-form">
          <h1 className="font"> Register </h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
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
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="input"
            onChange={(e) => handleChange(e)}
            value={formData.fullName}
          />
<<<<<<< HEAD
          {errRegis && (
            <p style={{ color: "red" }}>
              Invalid Register. Please check your form
            </p>
          )}
          <button className="btn-login" onClick={onRegister}>
            REGISTER
          </button>

=======
          {errRegis && <p style={{ color: "red" }}>Email Already Exist</p>}
          <button className="btn-login" onClick={onRegister}>
            REGISTER
          </button>
          
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
          <p className="switch">
            Already have an account ? Klik{" "}
            <b className="b" onClick={onSwitch}>
              Here
            </b>
          </p>
        </div>
      </Modal.Body>
    </Modal>
<<<<<<< HEAD
=======
    <Overlay
        show={showPopup}
        target={target}
        placement="top"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          
          <Popover.Content>
            <strong>Please Input Detail</strong> 
          </Popover.Content>
        </Popover>
      </Overlay>
      </>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  );
}

export default ModalRegister;
