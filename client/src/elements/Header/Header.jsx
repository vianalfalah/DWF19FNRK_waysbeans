import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Context } from "../../Context/Context";
import { logoutService } from "../../configs/services";
import userIcon from "../../assets/icon/userIcon.png";
import ModalLogin from "../Login";
import ModalRegister from "../Regis";
import "./Header.css";
import { LOGO, CART, PROFILE, LOGOUT } from "./../../configs/icons";

function Header() {
  const [state, dispatch] = useContext(Context);
  const { isLogin } = state;

  return (
    <Navbar fixed="top" className="header-container">
      <Link to="/">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
      </Link>
      <div className="align-center">
        {isLogin ? (
          <IsLogin dispatch={dispatch} state={state} />
        ) : (
          <NotLogin dispatch={dispatch} state={state} />
        )}
      </div>
    </Navbar>
  );
}

const NotLogin = ({ dispatch, state }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const onLogin = () => {
    setShowLogin(true);
  };
  const onRegister = () => {
    setShowRegister(true);
  };

  return (
    <>
      <button className="login" onClick={onLogin}>
        Login
      </button>
      <ModalLogin
        show={showLogin}
        setShow={setShowLogin}
        switchModal={setShowRegister}
        dispatch={dispatch}
        state={state}
      />
      <button className="register" onClick={onRegister}>
        Register
      </button>
      <ModalRegister
        show={showRegister}
        setShow={setShowRegister}
        switchModal={setShowLogin}
        dispatch={dispatch}
      />
    </>
  );
};

const IsLogin = ({ dispatch, state }) => {
  const { carts } = state;
  const onLogout = (e) => {
    logoutService(dispatch);
  };

  return (
    <>
      <Link to="/cart">
        {carts.length > 0 && (
          <div className="num-product-cart">
            <p>{carts.length}</p>
          </div>
        )}
        <img src={CART} alt="cart" className="img-cart" />
      </Link>

      <div className="dropdown">
        <img src={PROFILE} alt="user" className="img-profile dropbtn"></img>
        <div className="dropdown-content">
          <span>
            <Link to="/profile">
              <div className="roww">
                <img
                  src={userIcon}
                  alt="profile-icon"
                  className="dropdown-img-icon"
                />
                <p className="dropdown-text">Profile</p>
              </div>
            </Link>
          </span>
          {/* {state.user.isAdmin ? (
            <>
              <span>
                <Link to="/admin">
                  <div className="row align-center">
                    <img
                      src={PROFILE}
                      alt="add-product-icon"
                      className="dropdown-img-icon"
                    />
                    <p className="ml-19 dropdown-text">Admin</p>
                  </div>
                </Link>
              </span>
              <span>
                <Link to="/admin/add-product">
                  <div className="row align-center">
                    <img
                      src=""
                      alt="add-product-icon"
                      className="dropdown-img-icon"
                    />
                    <p className="ml-19 dropdown-text">Add Product</p>
                  </div>
                </Link>
              </span>
            </>
          ) : null} */}
          <span onClick={onLogout}>
            <div className="row align-center">
              <img
                src={LOGOUT}
                alt="logut-icon"
                className="dropdown-img-icon"
              />
              <p className="dropdown-text">Logout</p>
            </div>
          </span>
        </div>
      </div>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Header;
