import { useContext, useState, useEffect } from "react";
import Header from "./../../elements/Header/Header";
import { Context } from "../../Context/Context";
import { getProductById, baseURL } from "../../configs/services";
import { useParams } from "react-router-dom";
import ModalLogin from "../../elements/Login";
import ModalRegister from "../../elements/Regis";
import "./Detail.css";

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, dispatch] = useContext(Context);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    (async () => {
      const product = await getProductById(id);
      if (product) {
        return setProduct(product.data.data.product);
      }
    })();
  }, [id]);

  const onAdd = () => {
    if (state.isLogin) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { price: product.price, id },
      });
      dispatch({
        type: "SAVE_CART",
      });
    } else {
      setShowLogin(true);
    }
  };

  return product ? (
    <>
      <Header />;
      <div className="page-detail" style={{ marginTop: 80 }}>
        <div className="form-detail">
          <div>
            <img
              src={`${baseURL}${product.photo}`}
              alt={product.id}
              className="img"
            />
          </div>
          <p className="title">{product.name}</p>
          <p className="stock">Stock : {product.stock}</p>
          <p className="desc">{product.description}</p>
          <p className="price">Rp. {product.price}</p>
          <button className="add-cart" onClick={onAdd}>
            <p style={{ fontFamily: "Poppins" }}>Add Cart</p>
          </button>
        </div>
        <ModalLogin
          show={showLogin}
          setShow={setShowLogin}
          switchModal={setShowRegister}
          dispatch={dispatch}
        />
        <ModalRegister
          show={showRegister}
          setShow={setShowRegister}
          switchModal={setShowLogin}
          dispatch={dispatch}
        />
      </div>
    </>
  ) : (
    <div>Product Tidak Ada</div>
  );
}

export default DetailProduct;
