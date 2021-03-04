import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gray-900 pb-0">
        <div className="bg-gray-900 pb-0 flex flex-col h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
