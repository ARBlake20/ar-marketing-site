import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;