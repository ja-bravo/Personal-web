import React from 'react';
import styled from 'styled-components/macro';
import Row from './components/row';
import Col from './components/column';
import colours from '../../utils/colours';
import { Element } from 'react-scroll';
import Project from './components/project';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: initial;
    min-height: 100vh;
    padding-top: 50px;
  }

  .botSVG {
    position: absolute;
    top: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  letter-spacing: 0.025em;
  color: #fff;
  margin: 0.5rem 0px 2rem;
  text-align: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2rem;
  }
`;
const Underlined = styled.span`
  border-bottom: 2px solid ${colours.primary};
`;

const CompanyProjects = () => {
  return (
    <Element name="companyProjects">
      <Wrapper>
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" className="botSVG">
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        <Row>
          <Col full>
            <Title>
              <Underlined>With my company</Underlined>
            </Title>

            <Row full spaceBetween wrapContent>
              <Project
                url="https://uniphi.ie/"
                from="#ad5389"
                to="#3c1053"
                title="Uniphi"
                description="Find the best Student Nights in your area, grab guest list passes or buy your ticket via the app. Scan your ticket at the door for entry, simple as that"
              />

              <Project
                url="https://whatsthescor.ie/"
                from="#11998e"
                to="#38ef7d"
                title="Whats The Scór"
                description="The Go-To App for all of your GAA Fixtures, Results, Competitions and Live Scores in 32 Counties and Overseas"
              />

              <Project
                url="https://play.google.com/store/apps/details?id=boonagency.westend&hl=en_IE"
                from="#CB356B"
                to="#BD3F32"
                title="Galway App"
                description="This app lets you know what there is to do, see, eat, visit and experience in Galway. Go for a hike, take a self-guided tour, shop or stop in for a pint"
              />

              <Project
                url="https://galwaybayfm.ie/"
                from="#1c92d2"
                to="#DECBA4"
                title="Galwaybay FM App"
                description="You can Listen Live or Listen back to Podcasts of your favourite shows, watch our latest videos and keep on top of everything happening in Galway!"
              />
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </Element>
  );
};

export default CompanyProjects;
