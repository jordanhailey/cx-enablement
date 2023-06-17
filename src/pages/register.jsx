import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField, RadioSelect } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { defaultLanguage, supportedLanguages } from '@/helpers/supportedLanguages'
import { useRouter } from 'next/router'
import useConfig from '@/components/CioConfigContext'
import { useEffect, useState } from 'react'

const identifierMethods = {
  "idIdentifier": {id: 'id', title: 'ID', value: "id", type: "text"},
  "emailIdentifier": {id: 'email', title: 'Email', value: "email", type: "email" }  
}
const {idIdentifier , emailIdentifier} = identifierMethods

export default function Register() {
  const {siteID} = useConfig();
  const [clientConfigSiteID,setClientConfigSiteID] = useState("");
  const [homepage,setHomepage] = useState("");
  const [selectedIdentifierMethod,setSelectedIdentifierMethod] = useState(idIdentifier.id)

  useEffect(()=>{
    setClientConfigSiteID(siteID);
    if (typeof window !== "undefined") {
      if (window.location.hostname == "localhost") setHomepage(`${window.location.protocol}//${window.location.hostname}:${window.location.port}`)
      else setHomepage(`${window.location.protocol}//${window.location.hostname}/`)
    }
  },[siteID])
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const attributes = {};
    for (let [key,value] of data.entries()) {
      attributes[key] = `${value}`.trim();
    }
    if (typeof window !== "undefined") {
      if (!attributes.id && attributes.email && selectedIdentifierMethod == "email") {
        attributes.id = attributes.email
      }
      if (window?._cio) {
        window._cio.identify({...attributes})
      }
      if (window?.analytics) {
        window.analytics.identify(attributes.id,{...attributes})
      }
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
          id='registration-form'
          method="POST"
          action={`https://customerioforms.com/forms/submit_action?site_id=${clientConfigSiteID}&form_id=cio_cx_site_register_with_${selectedIdentifierMethod}&success_url=${homepage}`}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="Form Name"
            id="cio_cx_site_register_form_location"
            name="cio_cx_site_register_form_location"
            type="text"
            defaultValue="/register"
            className='top-0 left-0 sr-only disabled'
          />
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
          <RadioSelect 
            id={"identifier_type"} 
            name={"identifier_type"} 
            label={"Using ID or Email as an identifier?"} 
            className="col-span-full"
            defaultChecked={selectedIdentifierMethod}
            array={[idIdentifier,emailIdentifier]}
            onChange={(e)=>{
              setSelectedIdentifierMethod(e.target.id);
              // remove value from id input;
              if (e.target.id != idIdentifier.id) {
                const idInput = document.querySelector(`input#${idIdentifier.id}`);
                idInput.value = "";
              }
            }}
          />
          <TextField
            className={`col-span-full${selectedIdentifierMethod != idIdentifier.id ? " hidden" : ""}`}
            label={idIdentifier.title}
            id={idIdentifier.id}
            name={`${selectedIdentifierMethod == idIdentifier.id ? "" : "registration_"}${idIdentifier.id}`}
            type={idIdentifier.type}
            autoComplete={idIdentifier.id}
            required={selectedIdentifierMethod == idIdentifier.id}
            disabled={selectedIdentifierMethod != idIdentifier.id}
          />
          <TextField
            className="col-span-full"
            label={emailIdentifier.title}
            id={emailIdentifier.id}
            name={`${selectedIdentifierMethod == emailIdentifier.id ? "" : "registration_"}${emailIdentifier.id}`}
            type={emailIdentifier.type}
            autoComplete={emailIdentifier.id}
            required={selectedIdentifierMethod == emailIdentifier.id}
          />
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


