import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { getMyTransactions } from "../../configs/services";
import "./Profile.css";
import Header from "../../elements/Header/Header";
import profile from "../../assets/profile.png";
import Transaksi from "./Transaksi";

function Profile() {
  const [state] = useContext(Context);
  const { user: userData } = state;
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getMyTransactions(setTransactions);
  }, []);
  return (
    <div className="page-profile">
      <div>
        <Header />
      </div>
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
        </div>
      </div>
    </div>
  );
}

export default Profile;
