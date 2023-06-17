import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { CIOConfigProvider } from '@/components/CioConfigContext';
import { CioTrackerSnippet } from '@/components/CioTrackerSnippet';
import { CDPSnippet } from '@/components/CDPSnippet';
import 'focus-visible'
import '@/styles/tailwind.css'
import { localStorageConfigKeys } from '@/helpers/cioConfigReducer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window._cio) {
        if (`${window.localStorage.getItem(localStorageConfigKeys.trackPageViews)}` != "true") return
        window._cio.page(window.location.href,{trackingType:"manual"})
        if (window.analytics) {
          window.analytics.page(window.location.href,{trackingType:"manual"})
            // .then(function clicked(e){ // optionally, do something after event was sent
            //   console.log("Click logged",e)
            // })
        }
      }
    };
  
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
  
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <>
    <CIOConfigProvider>
      <CioTrackerSnippet />
      <CDPSnippet />
      <Component {...pageProps} />
    </CIOConfigProvider>
    <Analytics />
    </>
}
