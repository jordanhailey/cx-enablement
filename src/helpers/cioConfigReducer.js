export const configKeys = {
  siteID: "siteID",
  region: "region",
  useArrayParams: "useArrayParams",
  trackPageViews: "trackPageViews",
  inAppMessaging: "inAppMessaging",
  cdpToken: "cdpToken"
}
export const localStorageConfigKeys = {
  siteID: "CX_SITE_CIO_SITE_ID",
  region: "CX_SITE_CIO_REGION",
  useArrayParams: "CX_SITE_CIO_USE_ARRAY_PARAMS",
  trackPageViews: "CX_SITE_CIO_PAGE_VIEWS",
  inAppMessaging: "CX_SITE_CIO_IN_APP_ENABLED",
  cdpToken: "CX_SITE_CIO_CDP_TOKEN"
}

// Values set in .env file
const SITE_ID = process.env.NEXT_PUBLIC_CIO_SITE_ID || "YOUR_SITE_ID";
const REGION = process.env.NEXT_PUBLIC_CIO_REGION_US != "false" ? "US" : "EU"; // accepts any value, other than false or "false"
const USE_ARRAY_PARAMS = process.env.NEXT_PUBLIC_CIO_USE_ARRAY_PARAMS || "true";
const PAGE_VIEWS = process.env.NEXT_PUBLIC_CIO_PAGE_VIEWS || "false";
const IN_APP_ENABLED = process.env.NEXT_PUBLIC_CIO_IN_APP_ENABLED || "false";
const CDP_TOKEN = process.env.NEXT_PUBLIC_CIO_CDP_TOKEN || "YOUR_CDP_TOKEN";

// Interactions with localStorage
export function getLocalStorageValue(key="", fallbackValue="") {
  let stored;
  if (typeof window !== 'undefined') {
    stored = window.localStorage.getItem(key);
  }
  return stored ? stored : fallbackValue;
}

export function updateLocalStorageValue(key,value){
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key,value);
    return window.localStorage.getItem(key);
  }
}

const siteID = getLocalStorageValue(localStorageConfigKeys.siteID,SITE_ID);
const region = getLocalStorageValue(localStorageConfigKeys.region,REGION);
const trackPageViews = getLocalStorageValue(localStorageConfigKeys.trackPageViews,PAGE_VIEWS);
const useArrayParams = getLocalStorageValue(localStorageConfigKeys.useArrayParams,USE_ARRAY_PARAMS);
const inAppMessaging = getLocalStorageValue(localStorageConfigKeys.inAppMessaging,IN_APP_ENABLED);
const cdpToken = getLocalStorageValue(localStorageConfigKeys.cdpToken,CDP_TOKEN);

export const initialCIOConfigState = {
    siteID,
    region,
    trackPageViews,
    useArrayParams,
    inAppMessaging,
    cdpToken
}

export const operationTypes = {
  siteID: "UPDATE_SITE_ID",
  region: "UPDATE_REGION",
  trackPageViews: "UPDATE_PAGE_TRACKING",
  useArrayParams: "UPDATE_USE_ARRAY_PARAMS",
  inAppMessaging: "UPDATE_IN_APP_STATE",
  cdpToken: "UPDATE_CDP_TOKEN",
}

export default function reducer(state, action) {
  const newState = {...state};
  const {operations} = action;
  operations.forEach(op=>{
    switch(op.type) {
      case operationTypes.siteID:
        const siteID = op.siteID;
        if (newState.siteID == siteID) break;
        updateLocalStorageValue(localStorageConfigKeys.siteID,siteID);
        newState.siteID = siteID;
        break;
      case operationTypes.region:
        const region = op.region;
        if (newState.region == region) break;
        updateLocalStorageValue(localStorageConfigKeys.region,region);
        newState.region = region;
        break;
      case operationTypes.trackPageViews:
        const trackPageViews = op.trackPageViews;
        if (newState.trackPageViews == trackPageViews) break;
        updateLocalStorageValue(localStorageConfigKeys.trackPageViews,trackPageViews);
        newState.trackPageViews = trackPageViews;
        break;
      case operationTypes.useArrayParams:
        const useArrayParams = op.useArrayParams;
        if (newState.useArrayParams == useArrayParams) break;
        updateLocalStorageValue(localStorageConfigKeys.useArrayParams,useArrayParams);
        newState.useArrayParams = useArrayParams;
        break;
      case operationTypes.inAppMessaging:
        const inAppMessaging = op.inAppMessaging;
        if (newState.inAppMessaging == inAppMessaging) break;
        updateLocalStorageValue(localStorageConfigKeys.inAppMessaging,inAppMessaging);
        newState.inAppMessaging = inAppMessaging;
        break;
      case operationTypes.cdpToken:
        const cdpToken = op.cdpToken;
        if (newState.cdpToken == cdpToken) break;
        updateLocalStorageValue(localStorageConfigKeys.cdpToken,cdpToken);
        newState.cdpToken = cdpToken;
        break;
      default:
        console.log("DEFAULT",{op,newState})
    }
  });
  return newState;
}

export function updateSiteID(newSiteID) {
  const action = {type:operationTypes.siteID,siteID:newSiteID}
  return action
}
export function updateTrackPageViews(pageViewTrackingValue) {
  const action = {type:operationTypes.trackPageViews,trackPageViews:pageViewTrackingValue}
  return action
}

export const operations = {
  updateSiteID,
  updateTrackPageViews
}