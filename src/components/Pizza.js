import React, { useState } from "react"; 
import { Modal } from 'react-bootstrap';
import pizzas from "../pizzadata";

function Pizza(props) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("oregano");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div style={{ margin: "60px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}> 
        <h1>{props.pizza.name}</h1>
        <img
          src={props.pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
          alt={props.pizza.name}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {props.pizza.toppings.map((variant) => {
              return <option key={variant} value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((i) => {
              const quantityValue = i + 1;
              return <option key={quantityValue} value={quantityValue}>{quantityValue}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: {props.pizza.price * quantity} Rs/-</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={props.pizza.image} className="img-fluid" style={{height:"400px" }}/>
          <p>{props.pizza.name}</p>
          <p>{props.pizza.price}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
