import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
