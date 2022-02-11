import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import Button from "./button.js";
import Logo from "./logo.js";

const HeaderContainer = styled(Row)`
  height: 70px;
  background-color: black;
  color: white;
  align-items: center;
`;

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 0 10px;

  :last-of-type {
    padding-right: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #4bd5ee;
`;

const Header = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    const token = localStorage.getItem("auth-token");

    if (token) {
      localStorage.clear();
      setLoggedOut(true);
    }
  };

  return loggedOut ? (
    <Redirect push to="/login" />
  ) : (
    <HeaderContainer>
      <Col md="3">
        <Logo $fontSize="26px">SWAPP</Logo>
      </Col>

      <Col style={{ justifyContent: "flex-end", display: "flex" }}>
        <Navigation>
          <ListItem>
            <Link href="/episodes">Episodes</Link>
          </ListItem>

          <ListItem>
            <Link href="/characters">Characters</Link>
          </ListItem>

          <ListItem>
            <Button
              $color="#4bd5ee"
              $backgroundColor="#fff"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ListItem>
        </Navigation>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
