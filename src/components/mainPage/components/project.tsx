import React from 'react';
import styled from 'styled-components/macro';
import colours from '../../../utils/colours';

const Wrapper = styled.div<{ from: string; to: string }>`
  padding: 24px;
  transition: all 0.5s;
  cursor: pointer;
  color: white;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 49%;
  margin-bottom: 2%;
  min-height: 200px;

  background: linear-gradient(to right, ${p => p.from} 0%, ${p => p.to} 100%);
  &:hover {
    transform: translateY(-5px);
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Desc = styled.span`
  color: white;
`;

const Project = ({ title, description, from, to, url }) => {
  return (
    <Wrapper from={from} to={to} onClick={() => window.open(url, '_blank')}>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Wrapper>
  );
};

export default Project;
