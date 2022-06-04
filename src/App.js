import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ProductDetail from "./Pages/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./redux/features/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const user_token = localStorage.getItem("user_token");
  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    if (userEmail && user_token) {
      dispatch(
        login({
          email: userEmail,
        })
      );
    }
  }, [userEmail, user_token, dispatch]);
  return (
    <div>
      <Header user={user} />
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
