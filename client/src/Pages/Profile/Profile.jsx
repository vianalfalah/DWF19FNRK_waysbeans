import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
<<<<<<< HEAD
import { getMyTransactions, loadedService } from "../../configs/services";
=======
import { getMyTransactions } from "../../configs/services";
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
import "./Profile.css";
import Header from "../../elements/Header/Header";
import profile from "../../assets/profile.png";
import Transaksi from "./Transaksi";

function Profile() {
<<<<<<< HEAD
  const [state, dispatch] = useContext(Context);
  const [userData, setUserData] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getMyTransactions(setTransactions);
    setUserData(JSON.parse(localStorage.getItem("profile")));
  }, []);

=======
  const [state] = useContext(Context);
  const { user: userData } = state;
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getMyTransactions(setTransactions);
  }, []);
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  return (
    <div className="page-profile">
      <div>
        <Header />
      </div>
<<<<<<< HEAD
      <div className="profile-section-wrapper">
        <div className="box-profile">
          <h2 className="profile-title">My Profile</h2>
          <div className="detail-profile">
            <img className="pict" src={profile} alt="profile" />
            <div className="profile-data">
              <p className="sub-title">Full Name</p>
              <p className="sub-value">
                {userData.profile
                  ? userData.profile.fullName
                  : userData.fullName}
              </p>
              <p className="sub-title">Email</p>
              <p className="sub-value">
                {userData.profile ? userData.profile.email : userData.email}
              </p>
            </div>
          </div>
        </div>
        <div className="profile-page-width-con-right">
          <h2 className="profile-page-title">My Transactions</h2>
          <div className="trans">
            {transactions.length > 0
              ? transactions.map((transaction, index) => {
                  return <Transaksi transaction={transaction} key={index} />;
                })
              : null}
          </div>
=======
      <div className="box-profile">
        <p className="profile-title">My Profile</p>
        <img className="pict" src={profile} alt="profile" />
        <p className="full-name">Full Name</p>
        <p className="p-name">{userData.fullName}</p>
        <p className="full-mail">Email</p>
        <p className="p-mail">{userData.email}</p>
      </div>
      <div className="profile-page-width-con-right">
        <h2 className="profile-page-title">My Transactions</h2>
        <div className="trans">
          {transactions.length > 0
            ? transactions.map((transaction, index) => {
                return <Transaksi transaction={transaction} key={index} />;
              })
            : null}
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        </div>
      </div>
    </div>
  );
}

export default Profile;
