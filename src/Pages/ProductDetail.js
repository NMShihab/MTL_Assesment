import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card, CardImg, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetail = (props) => {
  const [data, setData] = useState({});
  const location = useLocation();
  const params = useParams();

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${id}`);
      console.log({ response });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails(params.id);
  }, [params.id]);
  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Card>
              <CardImg src={data.image} />
            </Card>
          </Col>
          <Col>
            <h1>{data.name}</h1>
            <div className="d-flex">
              <h5>Description : </h5>
              <p> {data.description}</p>
            </div>
            <div className="d-flex">
              <h5>Price : </h5>
              <p> {data.price}</p>
            </div>
            <div className="d-flex">
              <h5>Category : </h5>
              <p> {data.category}</p>
            </div>
            <Button>Add To Cart</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
