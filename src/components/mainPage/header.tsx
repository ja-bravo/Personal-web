import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Row from './components/row';
import Col from './components/column';
import colours from '../../utils/colours';
import Button from './components/button';
import FA from 'react-fontawesome';
import { Link } from 'react-scroll';
import SVG from '../../../content/assets/web_developer.svg';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .topSVG {
    position: absolute;
    transform: rotate(180deg);
    bottom: 0;
  }

  .detail {
    position: absolute;
    right: 5%;
    width: 400px;
    height: 400px;
    top: 2%;

    @media only screen and (max-width: 1400px) {
      width: 300px;
      height: 300px;
      top: 2%;
      right: initial;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
      width: 50%;
      height: 50%;
      right: initial;
      top: -10%;
    }

    @media only screen and (max-width: 380px) {
      width: 43%;
      height: 43%;
      right: initial;
      top: -10%;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: 0.025em;
  color: #fff;
  margin: 0.5rem 0px 2rem;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Subtitle = styled.span`
  font-size: 1.8rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: -0.003em;
  line-height: 1.625;
  color: #e2e8f0;
  margin: 0.5rem 0px 2rem;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5rem;
  }
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
      <SVG className="detail" />
      <Row>
        <Col>
          <Title>
            Hello, I'm <Underlined>Jose Bravo.</Underlined>
          </Title>
          <Subtitle>I'm a full-stack developer and this is a work in progress.</Subtitle>

          <Link to="projects" spy={true} smooth={true} duration={500} containerId="container">
            <Button centered onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              View my work <Icon name="arrow-right" className={isHovered ? 'isHovered' : undefined} />
            </Button>
          </Link>
        </Col>
      </Row>
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" className="topSVG">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
    </Wrapper>
  );
};

export default Header;
