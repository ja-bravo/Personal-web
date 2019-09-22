import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Row from './components/row';
import Col from './components/column';
import colours from '../../utils/colours';
import Button from './components/button';
import FA from 'react-fontawesome';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: 0.025em;
  color: #fff;
  margin: 0.5rem 0px 2rem;
`;

const Subtitle = styled.span`
  font-size: 1.8rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: -0.003em;
  line-height: 1.625;
  color: #e2e8f0;
  margin: 0.5rem 0px 2rem;
  text-align: center;
`;

const Underlined = styled.span`
  border-bottom: 2px solid ${colours.primary};
`;

const Icon = styled(FA)`
  transition: all 0.5s;

  &.isHovered {
    transform: rotate(90deg);
  }
`;

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <Row>
        <Col>
          <Title>
            Hello, I'm <Underlined>Jose Bravo.</Underlined>
          </Title>
          <Subtitle>I'm a full-stack developer and this is a work in progress.</Subtitle>

          {/* <Link to="projects" spy={true} smooth={true} duration={500}>
              <Button centered onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                View my work <Icon name="arrow-right" className={isHovered ? 'isHovered' : undefined} />
              </Button> */}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Header;
