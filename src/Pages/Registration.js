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
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  const navigate = useNavigate();

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (password === e.target.value && password.length >= 8) {
      setIsDisable(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
    const data = { email, password };
    try {
      const response = await axios.post("http://localhost:4000/register", data);

      if (response.status === 201) {
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="m-5 w-50 shadow-sm p-3 mb-5 bg-white rounded">
        <CardHeader>Registration</CardHeader>
        <CardBody>
          <Form onSubmit={handleRegistration}>
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
              <ul>
                <li>Password Must be 8 charecters long</li>
              </ul>
            </FormGroup>
            <FormGroup>
              <Label for="password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="password"
                placeholder="Confirm Password"
                type="password"
                onChange={confirmPasswordHandler}
              />
            </FormGroup>
            <Button color="primary" disabled={isDisable}>
              Register
            </Button>
          </Form>
        </CardBody>
        <CardFooter>
          If You already registered then <Link to="/login"> Login here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Registration;
