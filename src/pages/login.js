import { Col, Container, FormControl, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Button from '../components/button.js';
import Logo from '../components/logo.js';

const BlackBox = styled(Container)`
  background-color: black;
  padding-bottom: 10px;
  width: ${({ $width }) => $width};
`;

const WhiteBox = styled(Row)`
  background-color: white;
  padding: 30px 0;
  margin: 10px;
  border-radius: 10px;
`;

const FormRow = styled(Row)`
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const FormCol = styled(Col)`
  display: flex;
  justify-content: ${({ $justifyContent = 'center' }) => $justifyContent};
`;

const Login = () => (
  <BlackBox $width="600px">
    <Row>
      <FormCol md={{ span: 8, offset: 2 }}>
        <Logo $fontSize="90px">SWAPP</Logo>
      </FormCol>
    </Row>

    <WhiteBox>
      <Col>
        <FormRow>
          <FormCol md={{ span: 8, offset: 2 }}>
            <FormControl placeholder="username" />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol md={{ span: 8, offset: 2 }}>
            <FormControl placeholder="password" />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol $justifyContent="right" md={{ span: 2, offset: 8 }}>
            <Button $color="#ffe300" $backgroundColor="black">
              Login
            </Button>
          </FormCol>
        </FormRow>
      </Col>
    </WhiteBox>
  </BlackBox>
);

export default Login;
