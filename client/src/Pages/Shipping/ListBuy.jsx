import { useState, useEffect } from "react";
import WAYS from "../../assets/ways-sm.svg";
<<<<<<< HEAD
import {
  getProductById,
  getMyTransactions,
  baseURL,
} from "../../configs/services";
import Moment from "react-moment";
import "./ListBuy.css";
import formatCurency from "../../configs/formatCurency";

function ListBuy({ children, dataProduct, ready }) {
  const [product, setProducts] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [userData, setUserData] = useState({});
  const qty = ready ? dataProduct.orderQuantity.qty : dataProduct.qty;
=======
import { getProductById, baseURL } from "../../configs/services";
import Moment from "react-moment";
import "./ListBuy.css";

function ListBuy({ children, dataProduct, ready = false }) {
  const [product, setProducts] = useState(null);
  const qty = ready ? dataProduct.orderQuantity.value : dataProduct.qty;
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  useEffect(() => {
    if (ready) {
      setProducts(dataProduct);
    } else if (dataProduct) {
      (async () => {
        const data = await getProductById(dataProduct.id);
        setProducts(data.data.data.product);
<<<<<<< HEAD
        await getMyTransactions(setTransactions);
        setUserData(JSON.parse(localStorage.getItem("profile")));
      })();
    }
  }, [dataProduct, ready]);

=======
      })();
    }
  }, [dataProduct, ready]);
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
  const date = new Date();
  return product ? (
    <div className="card-ship">
      <div className="row">
        <div className="align-center">
          <img
            src={`${baseURL}${product.photo}`}
            className="ship-img"
            alt={product.name}
          />
        </div>
        <div className="ml-13">
          <h5 className="ship-name">{product.name}</h5>
<<<<<<< HEAD
          <p className="ship-desc">{transactions.createdAt}</p>
          <div className="bon">
            <p className="ship-desc mt-21">
              Price : {formatCurency(product.price)}
            </p>
            <p className="ship-desc">Qty : {qty}</p>
            <p className="ship-desc">
              <span className="total-ship">
                Sub Total : {formatCurency(product.price * +qty)}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="qr-status">
=======
          <p className="ship-desc">
            <Moment format="dddd, Do MMMM YYYY">{date}</Moment>
          </p>
          <p className="ship-desc mt-21">Price : {product.price}</p>
          <p className="ship-desc">Qty : {qty}</p>
          <p className="ship-desc">
            <span className="total-ship">
              Sub Total : {product.price * +qty}
            </span>
          </p>
        </div>
      </div>
      <div>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        <div className="item-center">
          <img src={WAYS} className="ship-logo" alt={"logo"} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
}

export default ListBuy;
