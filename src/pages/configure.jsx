import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SelectField, TextField } from '@/components/Fields'
import useConfig from '@/components/CioConfigContext';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { configKeys, getLocalStorageValue, localStorageConfigKeys, operationTypes } from '@/helpers/cioConfigReducer';

export default function Configure() {
  const [clientConfigSiteID, setClientConfigSiteID] = useState("");
  const [clientConfigRegion, setClientConfigRegion] = useState("");
  const [clientConfigTrackPageViews, setClientConfigTrackPageViews] = useState("");
  const [clientConfigInAppMessaging, setClientConfigInAppMessaging] = useState("");
  const [clientConfigUseArrayParams, setClientConfigUseArrayParams] = useState("");
  const [clientConfigCDPToken, setClientConfigCDPToken] = useState("");
  const [configurePageRenderedClientSide, setConfigurePageRenderedClientSide] = useState(false);


  const { siteID, region, trackPageViews, inAppMessaging, useArrayParams, setState, cdpToken } = useConfig();

  const updateFormInput = async (event) => {
    event.preventDefault();
    let fn = function defaultChangeHandler(event,inputType) {
      console.log(input)
    };
    let inputType = "select";
    let getValue = (e=event, inputType) => {
      if (inputType == "text") return e?.target?.value?.trim();
      else if (inputType == "select") return (e?.target?.options[`${e?.target?.options?.selectedIndex}`]?.value)
    }
    switch (event.target.name) {
      case configKeys.siteID:
        inputType = "text";
        fn = setClientConfigSiteID;
        break;
      case configKeys.cdpToken:
        inputType = "text";
        fn = setClientConfigCDPToken;
        break;
      case configKeys.region:
        fn = setClientConfigRegion;
        break;
      case configKeys.trackPageViews:
        fn = setClientConfigTrackPageViews;
        break;
      case configKeys.inAppMessaging:
        fn = setClientConfigInAppMessaging;
        break;
      case configKeys.useArrayParams:
        fn = setClientConfigUseArrayParams;
        break;
      
      default:
        break;
    }
    let value = getValue(event,inputType);
    fn(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const ops = [];
    for (const [key,value] of data.entries()) {
      let op = operationTypes[key];
      ops.push({type:op,[`${key}`]:value})
    }
    setState(ops);
    window.location.hash = "configuration";
    window.location.reload();
  };
  let renderDelay;
  useEffect(()=>{
    let currentSiteID = getLocalStorageValue(localStorageConfigKeys.siteID,clientConfigSiteID);
    let currentRegion = getLocalStorageValue(localStorageConfigKeys.region,clientConfigRegion);
    let currentTrackPageViews = getLocalStorageValue(localStorageConfigKeys.trackPageViews,clientConfigTrackPageViews);
    let currentInAppMessaging = getLocalStorageValue(localStorageConfigKeys.inAppMessaging,clientConfigInAppMessaging);
    let currentUseArrayParams = getLocalStorageValue(localStorageConfigKeys.useArrayParams,clientConfigUseArrayParams);
    let currentCDPToken = getLocalStorageValue(localStorageConfigKeys.cdpToken,clientConfigCDPToken);
    const ops = [
      {type:`${operationTypes.siteID}`,siteID:currentSiteID},
      {type:`${operationTypes.region}`,region:currentRegion},
      {type:`${operationTypes.trackPageViews}`,trackPageViews:currentTrackPageViews},
      {type:`${operationTypes.inAppMessaging}`,inAppMessaging:currentInAppMessaging},
      {type:`${operationTypes.useArrayParams}`,useArrayParams:currentUseArrayParams},
      {type:`${operationTypes.cdpToken}`,cdpToken:currentCDPToken},
    ];
    if (renderDelay) {
      clearTimeout(renderDelay)
    }
    renderDelay = setTimeout(()=>{
      setState(ops);
    },500)
  },[ configurePageRenderedClientSide ]);
  
  
  useEffect(()=>{
    setClientConfigSiteID(siteID);
    setClientConfigRegion(region);
    setClientConfigTrackPageViews(trackPageViews);
    setClientConfigInAppMessaging(inAppMessaging);
    setClientConfigUseArrayParams(useArrayParams);
    setClientConfigCDPToken(cdpToken);
    setConfigurePageRenderedClientSide(true);
  },[ siteID, region, trackPageViews, inAppMessaging, useArrayParams, cdpToken ]);

  return (
    <>
      <Head>
        <title>Customer.io Congfig Page</title>
        <meta
          name="description"
          content="Edit the local session Customer.io configuration"
        />
      </Head>
      <Header />
      <main>
      <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Customer.io Connection(s)</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The configuration on this page impacts your connection to Customer.io. ( <Link href={"https://www.customer.io/docs/sdk/web/getting-started/#configure-the-sdk"} className='font-semibold text-blue-500' >see the subheading "Configure The SDK"</Link>  )
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This site is, by default, not connected to any Customer.io workspace. The form on this page will 
              allow you to create a connection to your own Customer.io workspace <span className='italic'>within your current browser session</span>. Once you clear your cache, or access this page with another browser, your connection is lost. This works by storing and accessing values in your browser's "localStorage".
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are the details of your current connection:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Current Site ID</span>
                  Site ID:
                </dt>
                <dd>
                  { clientConfigSiteID } <span className='text-red-400'>{ clientConfigSiteID != siteID ? "( not saved )" : "" }</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Current Region</span>
                  Region:
                </dt>
                <dd>
                  { clientConfigRegion } <span className='text-red-400'>{ clientConfigRegion != region ? "( not saved )" : "" }</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Auto Track Page Views Status</span>
                  Auto Track Page Views:
                </dt>
                <dd>
                  { clientConfigTrackPageViews == "true" ? "Yes" : "No" } <span className='text-red-400'>{ clientConfigTrackPageViews != trackPageViews ? "( not saved )" : "" }</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Use Array Params Status</span>
                  Use Array Params:
                </dt>
                <dd>
                  { clientConfigUseArrayParams == "true" ? "Yes" : "No" } <span className='text-red-400'>{ clientConfigUseArrayParams != useArrayParams ? "( not saved )" : "" }</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">In-App Messsages Status</span>
                  In-App Messsages:
                </dt>
                <dd>
                  { clientConfigInAppMessaging == "true" ? "Enabled" : "Disabled" } <span className='text-red-400'>{ clientConfigInAppMessaging != inAppMessaging ? "( not saved )" : "" }</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">CDP Token</span>
                  CDP Token:
                </dt>
                <dd>
                  { clientConfigCDPToken } <span className='text-red-400'>{ clientConfigCDPToken != cdpToken ? "( not saved )" : "" }</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form id='configuration' onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <TextField
                className="col-span-full"
                label="Customer.io Site ID"
                id="siteID"
                name="siteID"
                type="text"
                autoComplete="siteID"
                value={ clientConfigSiteID }
                onChange={ updateFormInput }
                />
              <TextField
                className="col-span-full"
                label="Customer.io CDP Token"
                id="cdpToken"
                name="cdpToken"
                type="text"
                autoComplete="cdpToken"
                value={ clientConfigCDPToken }
                onChange={ updateFormInput }
                />
              <SelectField
                className=""
                label="Region"
                id={ configKeys.region }
                name={ configKeys.region }
                value={ clientConfigRegion }
                onChange={ updateFormInput }
                required
              >
                <option value="US">US</option>
                <option value="EU">EU</option>
              </SelectField>
              <SelectField
                className=""
                label="Track Pageviews?"
                id={ configKeys.trackPageViews }
                name={ configKeys.trackPageViews }
                value={ clientConfigTrackPageViews }
                onChange={ updateFormInput }
                required
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </SelectField>
              <SelectField
                className=""
                label="Use Array Params?"
                id={ configKeys.useArrayParams }
                name={ configKeys.useArrayParams }
                value={ clientConfigUseArrayParams }
                onChange={ updateFormInput }
                required
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </SelectField>
              <SelectField
                className=""
                label="Use In-App Messages?"
                id={ configKeys.inAppMessaging }
                name={ configKeys.inAppMessaging }
                value={ clientConfigInAppMessaging }
                onChange={ updateFormInput }
                required
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </SelectField>
            </div>
            <div className="mt-8 flex">
              <Button
                type="submit"
                variant="solid"
                color="blue"
                className=""
              >
                <span>
                Update Configuration
                </span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
      </main>
      <Footer/>
    </>
  )
}
