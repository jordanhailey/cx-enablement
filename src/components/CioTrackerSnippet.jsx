import Script from "next/script";
import useConfig from "@/components/CioConfigContext";
import { useEffect } from "react";
import { configKeys } from "@/helpers/cioConfigReducer";

function reinitializeCIOTracker({siteID, region, trackPageViews, inAppMessaging, useArrayParams}) {
    if (typeof window !== 'undefined') {
        let currentTracker = document.querySelector("#cio-tracker");

        currentTracker.remove();
        let _cio = [];
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
    }
}

export function CioTrackerSnippet() {
  const { siteID, region, trackPageViews, inAppMessaging, useArrayParams } = useConfig();
  useEffect(()=>{
    reinitializeCIOTracker({siteID, region, trackPageViews, inAppMessaging, useArrayParams})
  },[siteID, region, trackPageViews, inAppMessaging, useArrayParams])
  return <Script id="init-cio-tracker" strategy="beforeInteractive">
        {`
          let siteID = "${siteID}";
          let region = "${region}";
          let trackPageViews = "${trackPageViews}";
          let inAppMessaging = "${inAppMessaging}";
          let useArrayParams = "${useArrayParams}";
          const overrideSiteID = window.localStorage.getItem("${configKeys.siteID}");
          if (overrideSiteID && overrideSiteID != "") siteID = overrideSiteID;
          const overrideRegion = window.localStorage.getItem(${configKeys.region});
          if (overrideRegion && overrideRegion != "") region = overrideRegion;
          const overrideTrackPageViews = window.localStorage.getItem(${configKeys.trackPageViews});
          if (overrideTrackPageViews && overrideTrackPageViews != "") trackPageViews = overrideTrackPageViews;
          const overrideInAppMessaging = window.localStorage.getItem(${configKeys.inAppMessaging});
          if (overrideInAppMessaging && overrideInAppMessaging != "") inAppMessaging = overrideInAppMessaging;
          const overrideUseArrayParams = window.localStorage.getItem(${configKeys.useArrayParams});
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
