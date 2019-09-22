import React from 'react';
import SEO from '../components/seo';
import Container from '../components/mainPage/components/container';
import Header from '../components/mainPage/header';
import Projects from '../components/mainPage/projects';

const MainPage = () => {
  return (
    <Container>
      <SEO title="Portfolio" />

      <Header />
      {/* <Projects /> */}
    </Container>
  );
};

export default MainPage;
