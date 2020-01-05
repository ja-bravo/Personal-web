import React from 'react';
import styled from 'styled-components/macro';
import Row from './components/row';
import Col from './components/column';
import colours from '../../utils/colours';
import { Element } from 'react-scroll';
import SocialIcon from './components/socialIcon';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: 0.025em;
  color: #fff;
  margin: 0.5rem 0px 2rem;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2.5rem;
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
  text-align: left;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Underlined = styled.span`
  border-bottom: 2px solid ${colours.primary};
`;

const About = () => {
  const [ref, inView, entry] = useInView({ threshold: 0 });
  return (
    <Element name="about">
      <Wrapper>
        <Row style={{ zIndex: 300 }}>
          <Col full>
            <Title>
              <Underlined>About me</Underlined>
            </Title>

            <Subtitle>
              <p>Nerd with a passion for building stuff. I love technology and everything around it.</p>

              <p>
                I'm currently the Lead Developer/Technical Director for{' '}
                <Underlined style={{ cursor: 'pointer' }} onClick={() => window.open('https://boonagency.ie', '_blank')}>
                  Boon Agency
                </Underlined>{' '}
                &{' '}
                <Underlined style={{ cursor: 'pointer' }} onClick={() => window.open('https://uniphi.ie', '_blank')}>
                  Uniphi
                </Underlined>
              </p>
            </Subtitle>

            <Col>
              <Subtitle>Contact me on</Subtitle>
              <Row full style={{ paddingTop: 0 }}>
                <SocialIcon icon="twitter" onClick={() => window.open('https://twitter.com/josebravodev')} />
                <SocialIcon icon="github" onClick={() => window.open('https://github.com/ja-bravo')} />
                <SocialIcon icon="envelope" onClick={() => (window.location.href = 'mailto:ja.bravo.isidro@gmail.com?subject=Portfolio')} />
              </Row>
            </Col>
          </Col>
        </Row>
      </Wrapper>
    </Element>
  );
};

export default About;
