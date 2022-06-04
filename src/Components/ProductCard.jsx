import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <CardImg src={product.image} width="100%" height="230px" />
        <CardBody>
          {" "}
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>Price : {product.price}</CardSubtitle>
          <Button>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
