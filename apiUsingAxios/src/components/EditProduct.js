import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EditProduct(props) {
  const [singleProduct, setsingleProduct] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImageURL: "",
  });

  useEffect(() => {
    setsingleProduct({ ...props.selectedProduct });
  }, [props.selectedProduct]);

  //console.log("edit props", props.selectedProduct);

  let updateSingleProduct = (event) => {
    setsingleProduct({
      ...singleProduct,
      [event.target.name]: event.target.value,
    });
  };

  let handleClose = () => {
    props.hideEditModal();
  };

  let editProduct = async () => {
    try {
      let response = await axios.put(
        `https://ty-shop.herokuapp.com/api/products/${props.selectedProduct._id}`,
        singleProduct
      );
      if (response.data.error) {
        alert(response.data.message);
        console.log("edit response", response);
      } else {
        alert(response.data.message);
        handleClose();
        props.fetchProducts();
        console.log("edit response", response);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Modal show={props.showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
                type="text"
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
          <Button variant="primary" onClick={editProduct}>
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProduct;
