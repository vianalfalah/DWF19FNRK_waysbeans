import React, { useState, useEffect } from "react";
import { editStatusTransaction } from "../../configs/services";
import "./Table.css";

function TableIncome({ data, dispatch }) {
  return (
    <table className="table-income" border="2">
      <thead className="head">
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Address</th>
          <th>Post Code</th>
          <th>Phone</th>
          <th>Product Order</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((tran, index) => (
              <Td data={tran} index={index} dispatch={dispatch} key={index} />
            ))
          : null}
      </tbody>
    </table>
  );
}
const Td = ({ data, index, dispatch }) => {
  const [products, setProducts] = useState({ id: [], name: "" });
  const [status, setStatus] = useState(data.status);
  const getProductName = () => {
    if (data.products && data.products.length > 0) {
      let productsName = "";
      data.products.forEach((product) => {
        if (product.name) {
          if (!products.id.includes(product.id)) {
            productsName += product.name + ", ";
            setProducts({
              id: [...products.id, product.id],
            });
          }
        }
      });
      setProducts({ ...products, name: productsName });
    }
  };
  useEffect(() => {
    getProductName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onAction = (status) => {
    editStatusTransaction(data.id, { status });
    setStatus(status);
  };
  return (
    <>
      <tr>
        <td style={{ backgroundColor: "red" }}>{+index + 1}</td>
        <td style={{ backgroundColor: "green" }}>{data.name}</td>
        <td style={{ backgroundColor: "blue" }}>{data.address}</td>
        <td style={{ backgroundColor: "yellow" }}>{data.pos}</td>
        <td style={{ backgroundColor: "yellow" }}>{data.phone}</td>
  <td style={{ backgroundColor: "orange" }}>{products.name}</td>
        <td>
          {status === "Success" ? (
            <p className="success">Succsess</p>
          ) : status === "Waiting Approve" ? (
            <p className="waiting-approve">Waiting Approve</p>
          ) : status === "On The Way" ? (
            <p className="text-on-the-way">On The Way</p>
          ) : (
            <p className="cancel">Cancel</p>
          )}
        </td>
        <td>
          {status === "Success" || status === "On The Way" ? (
            <div className="item-center">
              <i className="fas fa-check status-check"></i>
            </div>
          ) : status === "Waiting Approve" ? (
            <div className="item-center">
              <button
                className="btn-action cancell"
                onClick={() => onAction("Cancel")}
              >
                Cancel
              </button>
              <button
                className="btn-action successs"
                onClick={() => onAction("On The Way")}
              >
                Approve
              </button>
            </div>
          ) : (
            <div className="item-center">
              <i className="fas fa-times status-cancel"></i>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableIncome;
