import React from 'react';
import styled from 'styled-components/macro';
import Row from './components/row';
import Col from './components/column';
import colours from '../../utils/colours';
import { Element } from 'react-scroll';
import Project from './components/project';

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: initial;
    min-height: 90vh;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: 0.025em;
  color: ${colours.background};
  margin: 0.5rem 0px 2rem;
  text-align: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Underlined = styled.span`
  border-bottom: 2px solid ${colours.primary};
`;

const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-bottom: 100px solid white;
  position: relative;
  top: 1px;
`;

const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: 100px solid white;
  position: relative;
  top: -1px;
`;

const PersonalProjects = () => {
  return (
    <Element name="projects">
      <TriangleUp />
      <Wrapper>
        <Row>
          <Col full>
            <Title>
              <Underlined>On my own</Underlined>
            </Title>

            <Row full spaceBetween wrapContent>
              <Project
                url="https://github.com/ja-bravo/React-A-Star-with-Hooks"
                from="#f06449"
                to="rgb(251, 176, 59)"
                title="A* Pathfinder"
                description="An A* Algorithm playground built with React using hooks as a learning tool for hooks and algorithms"
              />

              <Project
                url="https://github.com/ja-bravo/image2palette"
                from="#59114D"
                to="#009FFD"
                title="Image2Palette"
                description="Python app that will return a colour palette based on the 10 main colours of an image"
              />

              <Project
                url="https://github.com/ja-bravo/health-doc"
                from="#CA2E55"
                to="#E3DC95"
                title="Health Doc"
                description="Small self-contained utility to monitor your API endpoints and get alerts if they go down"
              />

              <Project
                url="https://github.com/ja-bravo/health-doc"
                from="#a8c0ff"
                to="#3f2b96"
                title="Clifden 10k"
                description="Website built with Gatsby for a charity 10k run in Clifden, Ireland."
              />

              <Project
                url="https://github.com/ja-bravo/personal-web"
                from="#663299"
                to="#48335d"
                title="This website"
                description="This very website. Built with Gatsby, deployed on Netlify."
              />
              <Project
                url="https://github.com/ja-bravo/travel-list"
                from="#219575"
                to="#214560"
                title="Travel List App"
                description="Small React Native   app that allows you to track places you want to visit and things you want to do there."
              />
            </Row>
          </Col>
        </Row>
      </Wrapper>
      <TriangleDown />
    </Element>
  );
};

export default PersonalProjects;
