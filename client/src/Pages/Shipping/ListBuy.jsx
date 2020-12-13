import { useState, useEffect } from "react";
import WAYS from "../../assets/ways-sm.svg";
import { getProductById, baseURL } from "../../configs/services";
import Moment from "react-moment";
import "./ListBuy.css";

function ListBuy({ children, dataProduct, ready = false }) {
  const [product, setProducts] = useState(null);
  const qty = ready ? dataProduct.orderQuantity.value : dataProduct.qty;
  useEffect(() => {
    if (ready) {
      setProducts(dataProduct);
    } else if (dataProduct) {
      (async () => {
        const data = await getProductById(dataProduct.id);
        setProducts(data.data.data.product);
      })();
    }
  }, [dataProduct, ready]);
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
        <div className="item-center">
          <img src={WAYS} className="ship-logo" alt={"logo"} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
}

export default ListBuy;
