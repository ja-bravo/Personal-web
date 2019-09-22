import React, { useState } from 'react';
import styled from 'styled-components/macro';
import colours from '../../../utils/colours';

const Wrapper = styled.div`
  padding: 12px;
  transition: all 0.5s;
  cursor: pointer;
  color: white;
  border: 2px solid #fff;
  width: 166px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-radius: 4px;

  &:hover {
    border-color: ${colours.primary}c9;
    background: ${colours.primary}c9;
  }

  &.centered {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Button = ({ children, onMouseEnter, onMouseLeave, centered = false, onPress = () => undefined }) => {
  return (
    <Wrapper
      onMouseDown={onPress}
      className={centered && 'centered'}
      onMouseEnter={() => {
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => {
        if (onMouseLeave) onMouseLeave();
      }}>
      {children}
    </Wrapper>
  );
};

export default Button;
