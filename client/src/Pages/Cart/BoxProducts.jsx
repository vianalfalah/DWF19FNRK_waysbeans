import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { baseURL, getProductById } from "../../configs/services";
import { TRASH } from "./../../configs/icons";
import { Spinner } from "react-bootstrap";
import "./BoxProducts.css";

function BoxProducts({ dataProduct }) {
  const [product, setProducts] = useState(null);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    dataProduct &&
      (async () => {
        const data = await getProductById(+dataProduct.id);
        if (!data) {
          return;
        }
        const product = data.data.data.product;
        setProducts(product);
      })();
  }, [dataProduct]);
  const saveCart = () => {
    dispatch({
      type: "SAVE_CART",
    });
    dispatch({
      type: "GET_TOTAL_CART",
    });
  };
  const onAdd = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: dataProduct,
    });
    saveCart();
  };
  const onDesc = () => {
    if (dataProduct.qty > 1) {
      dispatch({
        type: "DESC_TO_CART",
        payload: dataProduct,
      });
    } else {
      dispatch({
        type: "REMOVE_TO_CART",
        payload: dataProduct,
      });
    }
    saveCart();
  };
  const onRemove = () => {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: dataProduct,
    });
    saveCart();
  };
  return product ? (
    <div className="space-between">
      <div className="order-qty">
        <div>
          <img
            src={`${baseURL}${product.photo}`}
            alt="contoh"
            className="img-products"
          />
        </div>
        <div className="list-product">
          <h5 className="product-name">{product.name}</h5>
          <div className="set-qty">
            <span className="btn-count minus" onClick={onDesc}>
              -
            </span>
            <p className="value ">{dataProduct.qty}</p>
            <span className="btn-count plus" onClick={onAdd}>
              +
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="price">Rp. {product.price * +dataProduct.qty}</p>
        <div className="trash">
          <img src={TRASH} alt="remove" className="cursor" onClick={onRemove} />
        </div>
      </div>
    </div>
  ) : (
    <>
      <Spinner animation="border" size="sm" />
      <span className="sr-only">Loading...</span>
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>
  );
}

export default BoxProducts;
