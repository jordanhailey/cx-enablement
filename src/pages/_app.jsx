import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'focus-visible'
import '@/styles/tailwind.css'
const SITE_ID = process.env.CIO_SITE_ID;
const REGION = Boolean(process.env.CIO_REGION_US) == true ? "US" : "EU";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window._cio) {
        window._cio.page(window.location.href)
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
  <Script id="cio-tracker" strategy="beforeInteractive">
      {`
        let siteID = "${SITE_ID}";
        let region = "${REGION}";
        const overrideSiteID = window.localStorage.getItem("CX_SITE_CIO_SITE_ID");
        if (overrideSiteID && overrideSiteID != "") siteID = overrideSiteID;
        const overrideRegion = window.localStorage.getItem("CX_SITE_CIO_REGION");
        if (overrideRegion && overrideRegion != "") region = overrideRegion;

        var _cio = _cio || [];
        (function() {
            var a,b,c;a=function(f){return function(){_cio.push([f].
            concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
            "sidentify","track","page","on","off"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
            var t = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
            t.async = true;
            t.id    = 'cio-tracker';
            t.setAttribute('data-site-id', siteID);
            t.setAttribute('data-use-array-params', 'true');
            
            //Enables in-app messaging
            t.setAttribute('data-use-in-app', 'true');

            if (region != "EU" ) t.src = 'https://assets.customer.io/assets/track.js';
            else t.src = 'https://assets.customer.io/assets/track-eu.js' // Will connect with EU datacenter if your account is in the EU region
            s.parentNode.insertBefore(t, s);
        })();
  `}
  </Script>
  <Component {...pageProps} />
  </>
}
