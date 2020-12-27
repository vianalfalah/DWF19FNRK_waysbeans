import "./Transaksi.css";
import ListBuy from "../Shipping/ListBuy";
import qr from "../../assets/qr.svg";
<<<<<<< HEAD
import { useState } from "react";
import { editStatusTransaction } from "../../configs/services";
import { Modal } from "react-bootstrap";

function Transaksi({ transaction }) {
  const [status, setStatus] = useState(transaction.status);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setStatus("Success");
    editStatusTransaction(transaction.id, { status: "Success" });
    window.location.href = "http://localhost:3000/profile";
  };

  const Status = ({ type }) => {
    return (
      <div className="status">
        <div style={{ marginTop: 10 }}>
          {type === "On The Way" ? (
            <div
              onClick={handleOpenModal}
              className="container-text-status otw"
            >
              On The Way
            </div>
          ) : type === "Success" ? (
            <div className="container-text-status success">Succsess</div>
          ) : type === "Waiting Approve" ? (
            <div className="container-text-status wait">Waiting Approve</div>
          ) : (
            <div className="container-text-status cancel">Cancel</div>
          )}
        </div>
      </div>
    );
  };

  const handleOpenModal = () => {
    setShow(!show);
  };

  const ModalConfirm = () => {
    return (
      <Modal
        backdrop="static"
        centered
        show={show}
        setShow={setShow}
        onHide={handleOpenModal}
        size="md"
        className="modal-regist-log"
      >
        <p className="text-desc-transaction align-center mr-15 p-3 m-auto">
          Product Have Arrived ?
        </p>
        <button
          className="btn mb-3"
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#613D2B",
            borderRadius: 8,
            color: "#fff",
            width: "50%",
            margin: "auto",
          }}
        >
          Confirm
        </button>
      </Modal>
    );
  };

  return (
    <div>
      <div className="qr">
        <img src={qr} alt="qr-code" />
        <Status type={transaction.status} />
      </div>
      {transaction.products.length > 0 &&
        transaction.products.map((product, index) => {
          return (
            <>
              <ListBuy dataProduct={product} key={index} ready={true} />
            </>
          );
        })}
      <div className="row">
        {status === "On The Way" && (
          <>
            <ModalConfirm />
          </>
=======

function Transaksi({ transaction }) {
  return (
    <div>
      {transaction.products.length > 0 &&
        transaction.products.map((product, index) => {
          console.log(product);
          return (
            <ListBuy dataProduct={product} key={index} ready={true}>
              <Status type={transaction.status} />
            </ListBuy>
          );
        })}
    </div>
  );
}

function Status({ type }) {
  return (
    <div className="status">
      <div className="qr">
        <img src={qr} alt="qr-code" />
      </div>
      <div style={{ marginTop: 10 }}>
        {type === "On The Way" ? (
          <div className="container bg-primary">
            <p className="text ">On The Way</p>
          </div>
        ) : type === "Success" ? (
          <div className="container bg-succsess">
            <p className="text text-succsess">Succsess</p>
          </div>
        ) : type === "Waiting Approve" ? (
          <div className="container bg-danger">
            <p className="text ">Waiting Approve</p>
          </div>
        ) : (
          <p className="text text-danger">Cancel</p>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        )}
      </div>
    </div>
  );
}

export default Transaksi;