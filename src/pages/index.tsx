import React from 'react';
import SEO from '../components/seo';
import Container from '../components/mainPage/components/container';
import Header from '../components/mainPage/header';
import Projects from '../components/mainPage/personalProjects';
import CompanyProjects from '../components/mainPage/companyProjects';
import About from '../components/mainPage/about';

const MainPage = () => {
  return (
    <Container id="container">
      <SEO title="Portfolio" />

      <Header />
      <Projects />
      <CompanyProjects />
      <About />
    </Container>
  );
};

export default MainPage;
