import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProduct(props) {
  const [singleProduct, setsingleProduct] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImageURL: "",
  });

  //   console.log("singleProduct",singleProduct);
  let handleClose = () => {
    props.hideAddModal();
  };

  let updateSingleProduct = (event) => {
    setsingleProduct({
      ...singleProduct,
      [event.target.name]: event.target.value,
    });
  };

  let addProduct = async () => {
    try {
      let response = await axios.post(
        "https://ty-shop.herokuapp.com/api/products",
        singleProduct
      );

      if (response.data.error) {
        alert(response.data.message);
        console.log("response", response);
      } else {
        alert(response.data.message);
        console.log("response", response);
        handleClose();
        setsingleProduct({
          productName: "",
          productPrice: "",
          productDescription: "",
          productImageURL: "",
        });
        props.fetchProducts();
      }
      //   console.log("response add product",response );
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <Modal show={props.showAddModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="productName"
                value={singleProduct.productName}
                onChange={updateSingleProduct}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product Price"
                name="productPrice"
                value={singleProduct.productPrice}
                onChange={updateSingleProduct}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Description"
                name="productDescription"
                value={singleProduct.productDescription}
                onChange={updateSingleProduct}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Image"
                name="productImageURL"
                value={singleProduct.productImageURL}
                onChange={updateSingleProduct}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProduct;
