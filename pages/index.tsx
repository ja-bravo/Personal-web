import React from 'react';
import Image from 'next/image';
import Project from '../components/project';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="hidden md:block absolute select-none w-[400px] h-[250px]  lg:w-[550px] lg:h-[400px] xl:w-[700px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[800px] top-0 right-0">
        <Image src="/topBlob.svg" layout={'fill'} alt={''} aria-hidden="true" />
      </div>
      <div className="md:hidden absolute select-none w-[150px] h-[100px] transform rotate-270 -top-4 right-0">
        <Image src="/topBlob.svg" layout={'fill'} alt={''} aria-hidden="true" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
        <Head>
          <title>Jose Bravo</title>
          <meta name="description" content="Full-Stack & App developer" />
          <link rel="canonical" href="https://josebravo.dev" />
        </Head>

        <h1 className="mt-12 md:mt-28 lg:mt-32 text-blue-500 text-4xl md:text-6xl leading-none font-extrabold max-w-[270px] md:max-w-md">
          Full Stack & App Developer
        </h1>
        <p className="text-lg md:text-xl leading-7 font-normal text-gray-500 max-w-xl mt-8">
          Hey! I'm <span className="text-blue-600">Jose Bravo</span>, a {new Date().getFullYear() - 1995} years old software developer from Spain 🇪🇸
          focused on the web and app world.
        </p>
        <p className="text-lg md:text-xl leading-7 font-normal text-gray-500 max-w-xl mt-8 whitespace-normal md:whitespace-pre-wrap">
          I have a passion for all things technology. I enjoy helping people and businesses achieve their goals through code. {'      '}I take pride in
          what I build and I strive to exceed expectations.
        </p>
        <p className="text-lg md:text-xl leading-7 font-normal text-gray-500 max-w-xl mt-8">
          Currently, I'm the CTO of a small digital agency named{' '}
          <Link passHref href="https://upourside.com">
            <a rel="noopener" target="_blank" className="text-blue-600 underline">
              Ourside
            </a>
          </Link>{' '}
          and{' '}
          <Link passHref href="https://xploreapp.io">
            <a rel="noopener" target="_blank" className="text-blue-600 underline">
              Xplore Local
            </a>
          </Link>
          .
        </p>
        <h1 className="mt-32 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">Experience</h1>
        <div className="mt-8 prose prose-blue prose-lg md:prose-xl text-gray-500 mx-auto">
          <p className="text-gray-500">
            In my {new Date().getFullYear() - 2016} years of experience, I have been employed at multiple roles ranging from Web Developer intern to
            Senior Full-Stack developer to Chief Technology Officer.
          </p>

          <p className="text-gray-500">
            In 2019 I Co-Founded{' '}
            <Link passHref href="https://upourside.com">
              <a rel="noopener" target="_blank" className="text-blue-600 underline">
                Ourside
              </a>
            </Link>
            , an Ireland based digital agency with 2 partners. While in Ourside, I have led a small team of developers and designers in building
            websites, apps and entire platforms for both clients and our own projects such as such as{' '}
            <Link passHref href="https://xploreapp.io">
              <a rel="noopener" target="_blank" className="text-blue-600 underline">
                Xplore Local
              </a>
            </Link>{' '}
            and{' '}
            <Link passHref href="https://apps.apple.com/es/app/uniphi-nights/id1141402659#?platform=iphone">
              <a rel="noopener" target="_blank" className="text-blue-600 underline">
                Uniphi
              </a>
            </Link>
            .
          </p>

          <p className="text-gray-500">
            Some of the projects I've built with Ourside have reached hundreds of thousands of users, millions of page views and have been nominated or
            won awards in the Irish Chamber Awards and .ie Digital Town awards.
          </p>

          <p className="text-gray-500">
            My current technological focus is building websites and apps using React, React Native, GraphQL, Next.js, Postgresql, Docker and AWS but
            I'm always striving to learn new technologies and keeping up with new developments.
          </p>
        </div>

        <h1 className="mt-32 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">Personal Projects</h1>
        <div className="mt-8 text-gray-500 mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {/*<Project*/}
              {/*  title={'API Monitoring'}*/}
              {/*  desc={'Simple SaaS project to send an alert if an API or website is down.'}*/}
              {/*  techs={['/next.png', '/graphql.png', '/docker.png']}*/}
              {/*  url={''}*/}
              {/*/>*/}
              <Project
                title={'Image 2 Dices'}
                desc={'Transform an image to a grid of dice faces using Tensorflow.js. Capstone project from the Learning TensorFlow.js book.'}
                techs={['/next.png', '/react.png', '/node.png', '/tensorflow.png']}
                url={'https://github.com/ja-bravo/image-to-dices-tfjs'}
              />
              <Project
                title={'A* Algorithm playground'}
                desc={'An small web built as a learning tool for the A* Algorithm.'}
                techs={['/next.png', '/react.png']}
                url={'https://github.com/ja-bravo/React-A-Star-with-Hooks'}
              />
              <Project
                title={'Image 2 Palette'}
                desc={'Small python app that will return a colour palette based on the 10 main colours of an image'}
                techs={['/python.png', '/flask.png']}
                url={'https://github.com/ja-bravo/image2palette'}
              />
            </ul>
          </div>
        </div>

        <h1 className="mt-32 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">Projects with Ourside</h1>
        <div className="mt-2 text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-center text-lg text-gray-500">These are some of the projects I've led and built during my time with Ourside.</p>
        </div>
        <div className="mt-6 text-gray-500 mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              <Project
                title={'Xplore Local'}
                desc={
                  'Community based project for towns and cities in Ireland. Composed of a CRM, the Xplore website, the Xplore Local App and the Xplore Merchant App.\n\nFinalist of the .ie Digital Town Awards 2021. Winner of the Best Digital Marketing Campaign at the Chamber Awards 2021. 500.000 monthly views.'
                }
                techs={['/react.png', '/graphql.png', '/docker.png', '/aws.png', '/node.png']}
                url={'https://xploreapp.io'}
              />
              <Project
                title={"What's the Scòr"}
                desc={
                  'Realtime and results GAA system with a companion App for the Score Keepers. Using React Native and Websockets.\n\n125.000+ downloads and thousands of concurrent users daily.'
                }
                techs={['/react.png', '/angular.png', '/docker.png', '/aws.png', '/node.png', '/redux.png', '/socket.svg']}
                url={'https://whatsthescor.ie/'}
              />
              <Project
                title={'SafeServe'}
                desc={
                  'Realtime, Delivery and Click & Collect project with a companion App for the Staff Members.\n\nBuilt with React native, Websockets and Stripe.'
                }
                techs={['/react.png', '/graphql.png', '/docker.png', '/aws.png', '/node.png', '/socket.svg']}
                url={'https://safeserveapp.ie/'}
              />
              <Project
                title={'Uniphi'}
                desc={
                  'Student app to buy tickets, Scanner app for venues and a backend to manage the venue.\n\nUsing React Native, Websockets and Stripe.'
                }
                techs={['/react.png', '/graphql.png', '/docker.png', '/aws.png', '/node.png', '/socket.svg']}
                url={'https://apps.apple.com/es/app/uniphi-nights/id1141402659#?platform=iphone'}
              />
            </ul>
          </div>
        </div>

        <h1 className="mt-32 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">Contact me</h1>
        <div className="mt-2 text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-center text-lg text-gray-500">Feel free to contact me through Twitter, Github or email.</p>
        </div>

        <div className="mt-8 mb-32 mx-auto flex flex-row space-x-8 justify-center z-30">
          <Link passHref href="https://twitter.com/josebravodev">
            <a target="_blank" rel="noopener">
              <Image src="/twitter.svg" objectFit="contain" width={32} height={32} alt={"Jose's Twitter"} />
            </a>
          </Link>
          <Link passHref href="https://twitter.com/josebravodev">
            <a target="_blank" rel="noopener">
              <Image src="/github.svg" objectFit="contain" width={32} height={32} alt={"Jose's Github"} />
            </a>
          </Link>

          <Link passHref href="mailto:ja.bravo.isidro@gmail.com?subject=From josebravo.dev">
            <a target="_blank">
              <Image src="/mail.svg" objectFit="contain" width={32} height={32} alt={"Jose's Email Address"} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
