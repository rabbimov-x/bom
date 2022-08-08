import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import '../styles/globals.css'
import '../styles/globalStill.scss'
import '../styles/modelCarousel.scss'
import '../styles/headerCarousel.scss'
import {store} from "../redux/store";
import {Toaster} from "react-hot-toast";
import Script from "next/script";
import process from "../next.config";
import {useEffect} from "react";
import {useRouter} from "next/router";
import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(()=>{
        const handleRouteChange = (url) =>{
           ga.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return ()=>{
            router.events.off('routeChangeComplete', handleRouteChange)
        }


    },[router.events])

  return <>
      <Script
          type={'text/javascript'}
          async
          charSet={'utf-8'}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
          strategy={'afterInteractive'}>
      </Script>

      <Script type={'text/javascript'} async id={'google-analytics-script'} strategy={'afterInteractive'}>
          {
              `  window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
    
      gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script>

      <Provider store={store}>
          <Component {...pageProps} />
          <Toaster
              toastOptions={{
                  // Define default options
                  className: '',
                  duration: 3000,
                  style: {
                      width: "30%",
                      height: "8vh",
                      background: '#ffce68',
                      color: '#fff',
                  }}}
              position="top-center"
          />
      </Provider>
  </>
}

export default MyApp
