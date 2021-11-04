import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useDarkMode from '../components/useDarkMode';

const Project = dynamic(() => import('../components/project'));
const DarkToggle = dynamic(() => import('../components/darkToggle'), { ssr: false });

export default function Home() {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    onChange: darkMode => {
      if (darkMode) {
        document.getElementsByTagName('html').item(0).classList.add('dark');
      } else {
        document.getElementsByTagName('html').item(0).classList.remove('dark');
      }
    },
  });

  return (
    <div className="w-full">
      <div className="hidden md:block absolute select-none w-[400px] h-[250px]  lg:w-[550px] lg:h-[400px] xl:w-[700px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[800px] top-0 right-0">
        <Image priority={true} src={darkMode.value ? '/topBlobDark.svg' : '/topBlob.svg'} layout={'fill'} alt={''} aria-hidden="true" />
      </div>
      <div className="md:hidden absolute select-none w-[150px] h-[100px] transform rotate-270 -top-4 right-0">
        <Image priority={true} src={darkMode.value ? '/topBlobDark.svg' : '/topBlob.svg'} layout={'fill'} alt={''} aria-hidden="true" />
      </div>

      <div className="fixed top-4 right-4 md:top-8 md:left-8">
        <DarkToggle
          enabled={darkMode.value}
          setEnabled={v => {
            if (v) {
              darkMode.enable();
            } else {
              darkMode.disable();
            }
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Head>
          <title>Jose Bravo</title>
          <meta name="description" content="Full-Stack & App developer" />
          <link rel="canonical" href="https://josebravo.dev" />
        </Head>

        <h1 className="mt-12 md:mt-28 lg:mt-32 dark:text-blue-400 text-blue-500 text-4xl md:text-6xl leading-none font-extrabold max-w-[270px] md:max-w-md">
          Full Stack & App Developer
        </h1>
        <p className="text-lg md:text-xl leading-7 font-normal dark:text-white text-gray-500 max-w-xl mt-8">
          Hey! I'm <span className="dark:text-blue-400 text-blue-600">Jose Bravo</span>, a software developer from Spain 🇪🇸 with over{' '}
          {new Date().getFullYear() - 2016} years of experience working in Full-Stack Web and App development.
        </p>
        <p className="text-lg md:text-xl leading-7 font-normal dark:text-white text-gray-500 max-w-xl mt-8 whitespace-normal md:whitespace-pre-wrap">
          I'm deeply passionate about all things technology. I enjoy keeping up with the latest industry trends and helping people achieve their goals
          through code. I take pride in what I build and strive to exceed expectations.
        </p>
        <p className="text-lg md:text-xl leading-7 font-normal dark:text-white text-gray-500 max-w-xl mt-8">
          When I'm not behind a keyboard, I love travelling, running, playing guitar and hiking with my dog Alfie.
        </p>
        <h1 className="mt-32  dark:text-blue-400 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
          Experience
        </h1>
        <div className="mt-8 prose prose-blue prose-lg md:prose-xl text-gray-500 mx-auto">
          <p className="dark:text-white text-gray-500">
            Over the past {new Date().getFullYear() - 2016} years, I have worked in various positions including Web Developer Intern to Senior
            Full-Stack Developer to Chief Technology Officer.
          </p>

          <p className="dark:text-white text-gray-500">
            In 2019 I co-founded{' '}
            <Link passHref href="https://upourside.com">
              <a rel="noopener" target="_blank" className="dark:text-blue-400 text-blue-600 underline">
                Ourside
              </a>
            </Link>{' '}
            — a digital agency based in Ireland — with two business partners. During my time at Ourside, I have led a modest team of developers and
            designers in building websites, apps and entire platforms for both our clients and our own products such as{' '}
            <Link passHref href="https://xploreapp.io">
              <a rel="noopener" target="_blank" className="dark:text-blue-400 text-blue-600 underline">
                Xplore Local
              </a>
            </Link>{' '}
            and{' '}
            <Link passHref href="https://apps.apple.com/es/app/uniphi-nights/id1141402659#?platform=iphone">
              <a rel="noopener" target="_blank" className="dark:text-blue-400 text-blue-600 underline">
                Uniphi
              </a>
            </Link>
            .
          </p>

          <p className="dark:text-white text-gray-500">
            Some of the projects I've built with Ourside have amassed hundreds of thousands of users, gained millions of page views and received
            national acclaim at the Irish Chamber Awards and .ie Digital Town awards.
          </p>

          <p className="dark:text-white text-gray-500">
            My current technological focus is building websites and apps using React, React Native, GraphQL, Next.js, Postgresql, Docker and AWS but
            I'm always eager to learn new technologies and keep up with new developments in the field.
          </p>
        </div>

        <h1 className="mt-32  dark:text-blue-400 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
          Personal Projects
        </h1>
        <div className="mt-8 text-gray-500 mx-auto">
          <div className="dark:bg-gray-800 bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              <Project
                title={'Sentinel'}
                desc={'API monitoring, performance tracking and status page generator.'}
                techs={['/next.png', '/react.png', '/node.png', '/graphql.png', '/docker.png']}
                url={'https://usesentinel.dev'}
              />
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
          <p className="text-center text-lg dark:text-white text-gray-500">
            These are some of the projects I've led and built during my time with Ourside.
          </p>
        </div>
        <div className="mt-6 text-gray-500 mx-auto">
          <div className="dark:bg-gray-800 bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200 ">
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

        <h1 className="mt-32  dark:text-blue-400 text-blue-500 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
          Contact me
        </h1>
        <div className="mt-2 text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-center text-lg dark:text-white text-gray-500">Feel free to contact me through Twitter, LinkedIn, Github or email.</p>
        </div>

        <div className="mt-8 mb-32 mx-auto flex flex-row space-x-8 justify-center z-30">
          <Link passHref href="https://twitter.com/josebravodev">
            <a target="_blank" rel="noopener" className="text-gray-800 dark:text-gray-100">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </Link>

          <Link passHref href="https://www.linkedin.com/in/josebravodev/">
            <a target="_blank" rel="noopener" className="text-gray-800 dark:text-gray-100">
              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </Link>

          <Link passHref href="https://github.com/ja-bravo">
            <a target="_blank" rel="noopener" className="text-gray-800 dark:text-gray-100">
              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
