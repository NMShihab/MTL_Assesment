import React from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";

const Header = ({ user }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_token");
    dispatch(logout());
  };

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          {user ? (
            <>
              <NavbarText>{user.email}</NavbarText>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    onClick={logoutHandler}
                  >
                    {" "}
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </>
          ) : (
            <Nav navbar>
              <NavItem>
                <NavLink href="/login"> Login</NavLink>
              </NavItem>
            </Nav>
          )}
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
