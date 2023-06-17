import Script from "next/script";
import useConfig from "@/components/CioConfigContext";
import { localStorageConfigKeys } from "@/helpers/cioConfigReducer";

export function CioTrackerSnippet() {
  const { siteID, region, trackPageViews, inAppMessaging, useArrayParams } = useConfig();
  return <Script id="init-cio-tracker" strategy="beforeInteractive">
        {`
          let siteID = "${siteID}";
          let region = "${region}";
          let trackPageViews = "${trackPageViews}";
          let inAppMessaging = "${inAppMessaging}";
          let useArrayParams = "${useArrayParams}";
          const overrideSiteID = window.localStorage.getItem("${localStorageConfigKeys.siteID}");
          if (overrideSiteID && overrideSiteID != "") siteID = overrideSiteID;
          const overrideRegion = window.localStorage.getItem("${localStorageConfigKeys.region}");
          if (overrideRegion && overrideRegion != "") region = overrideRegion;
          const overrideTrackPageViews = window.localStorage.getItem("${localStorageConfigKeys.trackPageViews}");
          if (overrideTrackPageViews && overrideTrackPageViews != "") trackPageViews = overrideTrackPageViews;
          const overrideInAppMessaging = window.localStorage.getItem("${localStorageConfigKeys.inAppMessaging}");
          if (overrideInAppMessaging && overrideInAppMessaging != "") inAppMessaging = overrideInAppMessaging;
          const overrideUseArrayParams = window.localStorage.getItem("${localStorageConfigKeys.useArrayParams}");
          if (overrideUseArrayParams && overrideUseArrayParams != "") useArrayParams = overrideUseArrayParams;

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
              t.setAttribute('data-use-array-params', useArrayParams);
              
              //Page Tracking
              t.setAttribute('data-auto-track-page', trackPageViews);
              
              //Enables in-app messaging
              t.setAttribute('data-use-in-app', inAppMessaging);

              if (region != "EU" ) t.src = 'https://assets.customer.io/assets/track.js';
              else t.src = 'https://assets.customer.io/assets/track-eu.js' // Will connect with EU datacenter if your account is in the EU region
              s.parentNode.insertBefore(t, s);
          })();
    `}
    </Script>
}
