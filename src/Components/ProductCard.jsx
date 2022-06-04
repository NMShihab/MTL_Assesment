import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <CardImg src={product.image} width="100%" height="200px" />
        <CardBody>
          {" "}
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>Price : {product.price}</CardSubtitle>
          <Link to={`product/${product.id}`}>
            <Button>See Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
