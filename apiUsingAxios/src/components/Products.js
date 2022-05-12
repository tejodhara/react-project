import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import HTTP from "../axiosConfig";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function Products() {
  const [products, setproducts] = useState([]);
  const [showAddModal, setshowAddModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [selectedProduct, setselectedProduct] = useState({});

  //   console.log("selectedProduct", selectedProduct);
  //   console.log("products", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = async () => {
    let response = await HTTP.get("/api/products");
    // console.log("response products", response);
    setproducts(response.data.products);
  };

  // to open add modal
  let openAddModal = () => {
    setshowAddModal(true);
  };

  let hideAddModal = () => {
    setshowAddModal(false);
  };
  // get selected product and open edit modal
  let getSelectedProduct = (product) => {
    setselectedProduct(product);
    setshowEditModal(true);
  };

  let hideEditModal = () => {
    setshowEditModal(false);
  };

  // to delete the product
  let deleteProduct = async (prodID) => {
    try {
      // console.log("prod id",prodID);
      let response = await HTTP.delete(`/api/products/${prodID}`);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        fetchProducts();
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>
              <Button className="btn btn-warning" onClick={openAddModal}>
                ➕ ADD 
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productDescription}</td>
                <td>
                  <img
                    width="220px"
                    height="200px"
                    src={product.productImageURL}
                    alt={product.productName}
                  />
                </td>
                <td>
                  <Button
                    onClick={() => {
                      getSelectedProduct(product);
                    }}>
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      deleteProduct(product._id);
                    }}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <AddProduct
        showAddModal={showAddModal}
        hideAddModal={hideAddModal}
        fetchProducts={fetchProducts}
      />

      <EditProduct
        showEditModal={showEditModal}
        hideEditModal={hideEditModal}
        selectedProduct={selectedProduct}
        fetchProducts={fetchProducts}
      />
    </div>
  );
}

export default Products;
