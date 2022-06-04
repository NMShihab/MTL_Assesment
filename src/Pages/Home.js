import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      console.log(response);

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Container>
        <div className="text-center">PRODUCTS</div>
        <div className="m-3">
          <form className="d-flex justify-content-around">
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect2">
                <option>Filter By Categary</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect2">
                <option>Sort Product</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <input className="form-control" placeholder="Search by name" />
            </div>
          </form>
        </div>
        <Row>
          {data.map((d) => (
            <Col key={d.id} md={4} xl={3} className="mb-2">
              <ProductCard product={d} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
