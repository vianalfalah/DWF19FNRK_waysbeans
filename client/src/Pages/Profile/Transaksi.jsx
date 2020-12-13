import "./Transaksi.css";
import ListBuy from "../Shipping/ListBuy";
import qr from "../../assets/qr.svg";

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
        )}
      </div>
    </div>
  );
}

export default Transaksi;
