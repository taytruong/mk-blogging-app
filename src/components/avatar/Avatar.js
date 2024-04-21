import React from 'react';
import styled from "styled-components";
const AvatarStyles = styled.div`
width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }`;

const Avatar = ({onClick = () => {},children = ""}) => {
    return (
        <AvatarStyles onClick={onClick}>
            <img src={children} alt="" />
        </AvatarStyles>
    );
};

export default Avatar;