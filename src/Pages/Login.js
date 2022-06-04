import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:4000/login", data);
      console.log(response);
      if (response.status === 200) {
        const token = response.data.accessToken;
        const decoded = jwt_decode(token);
        dispatch(
          login({
            email: email,
          })
        );
        localStorage.setItem("user_token", token);
        localStorage.setItem("user", email);
        navigate("/");
        console.log({ decoded });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="m-5 w-50 shadow-sm p-3 mb-5 bg-white rounded">
        <CardHeader>Login Here</CardHeader>
        <CardBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary">Login</Button>
          </Form>
        </CardBody>
        <CardFooter>
          If You are not registered then{" "}
          <Link to="/registration"> Register here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
