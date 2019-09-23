import React from 'react';
import styled from 'styled-components/macro';
import colours from '../../../utils/colours';

const Wrapper = styled.div<{ from: string; to: string }>`
  padding: 24px;
  transition: all 0.5s;
  cursor: pointer;
  color: white;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 49%;
  margin-bottom: 2%;
  min-height: 133px;

  background: linear-gradient(to right, ${p => p.from} 0%, ${p => p.to} 100%);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
`;

const Desc = styled.span`
  color: white;
`;

const Project = ({ title, description, from, to, url }) => {
  return (
    <Wrapper from={from} to={to} onMouseClick={() => window.open(url, '_blank')}>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Wrapper>
  );
};

export default Project;
