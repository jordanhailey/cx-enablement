import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { defaultLanguage, supportedLanguages } from '@/helpers/supportedLanguages'
import { useRouter } from 'next/router'
import useConfig from '@/components/CioConfigContext'
import { useEffect, useState } from 'react'

export default function Register() {
  const {siteID} = useConfig();
  const [clientConfigSiteID,setClientConfigSiteID] = useState("");
  const [homepage,setHomepage] = useState("");
  useEffect(()=>{
    setClientConfigSiteID(siteID)
    typeof window !== "undefined" ? setHomepage(`${window.location.protocol}//${window.location.hostname}/`) : "example.com"
  },[siteID])
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const entries = {};
    for (let [key,value] of data.entries()) {
      // assign "username" field to identifier
      key = key == "username" ? "id" : key;
      if (key != "password") entries[key] = value;
    }
    if (typeof window !== "undefined" && window?._cio) {
      window._cio.identify({...entries})
      window.localStorage.setItem("CX_SITE_CIO_FIRST_NAME",entries.first_name)
    }
    event.target.submit();
  };

  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            {/* <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action={`https://customerioforms.com/forms/submit_action?site_id=${clientConfigSiteID}&form_id=cio_cx_site&success_url=${homepage}`}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            required
          />
          {/* <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
          /> */}
          <SelectField
            className="col-span-full"
            label="When we reach out to you, what language would you prefer?"
            id="language"
            name="language"
            defaultValue={defaultLanguage}
            required
          >
            { supportedLanguages.map(lang=>{
              return <option key={lang.value} value={lang.value}>{lang.name}</option>
            })}
          </SelectField>
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option value="cio-ts">Customer.io's Technical Support Team</option>
            <option value="cio-cs">Customer.io's Customer Success Team</option>
            <option value="external">A Colleague</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}


