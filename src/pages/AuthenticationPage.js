import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 150px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;

  }
  .have-account {
    margin-bottom: 20px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center mt-9 mr-12">
          <NavLink to="/" className="inline-block">
            <img srcSet="/logo.png 1x" alt="mk-blogging" className="logo" />
          </NavLink>
        <h1 className="heading">MK Blogging</h1>
        </div>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;