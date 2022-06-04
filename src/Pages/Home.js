import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");

      if (response.status === 200) {
        setData(response.data);
        const allCategories = response.data.map((d) => d.category);
        const categories = new Set(allCategories);
        const catArray = [];
        categories.forEach((cat) => catArray.push(cat));
        setCategory(catArray);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (data, filterCategory, sortBy, searchString) => {
    if (
      searchString.length === 0 &&
      sortBy.length === 0 &&
      filterCategory.length === 0
    ) {
      return data.sort((a, b) => a.id - b.id);
    }
    let fdata = data;
    if (filterCategory) {
      fdata = fdata.filter((d) => d.category === filterCategory);
    }
    if (sortBy === "Name") {
      fdata.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    }
    if (sortBy === "Price") {
      fdata.sort((a, b) => a.price - b.price);
    }

    if (searchString) {
      fdata = fdata.filter((d) =>
        d.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }

    return fdata;
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Container>
        <div className="text-center">
          {" "}
          <h1>PRODUCTS</h1>
        </div>
        <div className="m-3">
          <form className="d-flex justify-content-around">
            <div className="form-group">
              <select
                class="form-control"
                id="exampleFormControlSelect2"
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="">Filter By Categary</option>
                {category.map((cat, index) => (
                  <option value={cat} key={index}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort Product</option>
                <option value="Name">Name</option>
                <option value="Price">Price</option>
              </select>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search by name"
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
          </form>
        </div>
        <Row>
          {!loading &&
            filterData(data, filterCategory, sortBy, searchString).map((d) => (
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
