import Image from 'next/image';
import React from 'react';
import Screen from '../components/screen';
import Project from '../components/project';
import Tool from '../components/tool';
import SocialIcon from '../components/socialIcon';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Head>
        <title>Jose Bravo</title>
        <meta name="description" content="Full-Stack, Mobile and Machine Learning developer." />
        <link rel="canonical" href="https://josebravo.dev" />
      </Head>
      <Screen>
        <div className="w-full flex justify-center items-center mb-12 mt-32">
          <Image src="/developer.svg" width={550} height={300} alt={''} priority />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Hey, I'm Jose Bravo.</h1>
        <h2 className="text-xl text-center">Full-Stack, Mobile and Machine Learning developer.</h2>

        <div className="w-full flex justify-center items-center mb-12 mt-12 lg:mt-24">
          <div className="scrollContainer">
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
          </div>
        </div>
      </Screen>

      <img src="/topWave.svg" className="w-full scale-105 transform" alt={''} />
      <div className="bg-gray-700 p-8 w-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-lg lg:text-xl max-w-4xl mb-2">
            I'm the CTO/Co-Founder of{' '}
            <a href="https://upourside.com" target="_blank" className="cursor-pointer underline">
              Ourside
            </a>{' '}
            and CTO of{' '}
            <a href="https://xploreapp.io" className="cursor-pointer underline" target="_blank">
              Xplore Local.
            </a>{' '}
          </p>
          <p className="text-lg lg:text-xl max-w-6xl">
            In the last {new Date().getFullYear() - 2016} years, I’ve worked with nation wide Irish companies such as Galwaybay FM and Connacht
            Tribune. As the CTO of Ourside, I’ve helped bring to market apps such as Uniphi, What’s The Scòr, Xplore and SafeServe. Combined, these
            apps have over 100.000 users and bring over 500.000 € yearly.
          </p>
        </div>
      </div>
      <img src="/bottomWave.svg" className="w-full scale-105 transform mb-24" alt={''} />

      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <h2 className="text-xl text-center mb-24">These are some of the projects I’ve led while working for Ourside.</h2>
      <div className="container mx-auto flex flex-col mb-24">
        <Project image={'/uniphi.png'} title={'Uniphi'}>
          <span className="text-center md:text-left text-sm md:text-md block leading-tight">
            Ticketing and events App with a companion Scanner App, built with React native and GraphQL.
          </span>
          <span className="text-center md:text-left  text-sm md:text-md leading-tight block mt-2 mb-2">
            Custom built CRM made with Node.js and React.
          </span>
          <span className="text-center inline-block md:text-left  text-sm md:text-mdleading-tight">
            60.000 users and a monthly turnover of ~20.000€ at it's peak.
          </span>
        </Project>

        <Project image={'/wts.png'} title={"What's The Scòr"}>
          <span className="text-center md:text-left  text-sm md:text-md block leading-tight ">
            Realtime and results GAA system with a companion App for the Score Keepers, built with React native and Redux.
          </span>
          <span className="text-center md:text-left  text-sm md:text-md eading-tight block  mt-2 mb-2">
            Custom built CRM made with Node.js and Angular 2.
          </span>
          <span className="text-center inline-block md:text-left  text-sm md:text-md leading-tight">
            55.000 users and thousands of concurrent users via WebSockets at it's peak.
          </span>
        </Project>

        <Project image={'/safeserve.png'} title={'SafeServe'}>
          <span className="text-center md:text-left  text-sm md:text-md block leading-tight  max-w-4xl">
            Realtime, Delivery and Click & Collect project with a companion App for the Staff Members, built with React native and GraphQL.
          </span>
          <span className="text-center md:text-left  text-sm md:text-md leading-tight block  mt-2 mb-2">
            Custom built CRM made with Next.js, Stripe and Node.js.
          </span>
          <span className="text-center md:text-left inline-block  text-sm md:text-md leading-tight">
            Thousands of users and a monthly turnover of over 60.000 €
          </span>
        </Project>

        <Project image={'/xplore.png'} title={'Xplore Local'}>
          <span className="text-center md:text-left  text-sm md:text-md block leading-tight  max-w-4xl ">
            Community based project for towns and cities in Ireland. Composed of a CRM, the Xplore website, the Xplore Local App and the Xplore
            Merchant App.
          </span>
          <span className="text-center md:text-left  text-sm md:text-md leading-tight block mb-2 mt-4">
            Built with React, React Native, Next.js and GraphQL.
          </span>
          <span className="text-center md:text-left  text-sm md:text-md leading-tight block max-w-4xl mb-2">
            Enables towns to showcase their history, culture and heritage. Highlight local businesses and enable them to do business online.
          </span>
          <span className="text-center inline-block md:text-left  text-sm md:text-md max-w-4xl">
            Finalist of the .ie Digital Town Awards 2021. Winner of the Best Digital Marketing Campaign at the Chamber Awards 2021.
          </span>
        </Project>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12">Tools & Languages</h2>
      <div className={'container mx-auto flex flex-row justify-around mb-8'}>
        <Tool image={'/react.png'} title={'React Native'} />
        <Tool image={'/graphql.png'} title={'GraphQL'} />
        <Tool image={'/node.png'} title={'Node'} />
        <Tool image={'/next.png'} title={'GraphQL'} />
        <Tool image={'/docker.png'} title={'Docker'} />
      </div>
      <div className={'container mx-auto flex flex-row justify-around mb-24'}>
        <Tool image={'/angular.png'} title={'Angular'} />
        <Tool image={'/aws.png'} title={'AWS'} />
        <Tool image={'/tensorflow.png'} title={'Tensorflow'} />
        <Tool image={'/scikit.png'} title={'Scikit Learn'} />
        <Tool image={'/python.png'} title={'Python'} />
      </div>

      <img src="/topWave.svg" className="w-full scale-105 transform" alt={''} />
      <div className="bg-gray-700 p-8 w-full pb-24">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in contact</h2>
          <div className="flex flex-row justify-between mr-auto ml-auto max-w-sm">
            <SocialIcon icon="twitter" onClick={() => window.open('https://twitter.com/josebravodev')} />
            <SocialIcon icon="github" onClick={() => window.open('https://github.com/ja-bravo')} />
            <SocialIcon icon="envelope" onClick={() => (window.location.href = 'mailto:ja.bravo.isidro@gmail.com?subject=Portfolio')} />
          </div>
        </div>
      </div>
    </div>
  );
}
