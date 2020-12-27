import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import format from "../../configs/formatCurency";
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
import { API } from "../../configs/api";
import "./ListP.css";

const ListP = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await API("/products");

      if (response.status === 500) {
        console.log("server error");
      }

      setProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("state posts", products);

  return (
    <>
      {products.map((product) => (
        <Link
          to={`/detail/${product.id}`}
          key={product.id}
          className="text-decoration-none"
        >
          <Col>
            <Card className="c-list-card">
              <Card.Img
                className="c-list-card-img"
                variant="top"
                src={`${"http://localhost:5000/uploads/"}${product.photo}`}
              />
              <Card.Body>
                <Card.Text className="c-list-card-title">
                  {product.name}
                </Card.Text>
                <Card.Text className="c-list-card-price">
<<<<<<< HEAD
                  {format(product.price)}
=======
                  Rp. {product.price}
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
                </Card.Text>
                <Card.Text className="c-list-card-stock">
                  Stock : {product.stock}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      ))}
    </>
  );
};

export default ListP;
