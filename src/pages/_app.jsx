import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CIOConfigProvider } from '@/components/CioConfigContext';
import { CioTrackerSnippet } from '@/components/CioTrackerSnippet';
import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window._cio) {
        window._cio.page(window.location.href,{trackingType:"manual"})
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

  return <CIOConfigProvider>
    <CioTrackerSnippet />
    <Component {...pageProps} />
  </CIOConfigProvider>
}
