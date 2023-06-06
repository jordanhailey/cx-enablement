import Link from "next/link"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Page () {

  const faqs = [
    {
      question: "I see this site uses an edited Customer.io JavaScript tracking snippet, is this safe to copy?",
      answer:
        `This website was implemented with a focus on the ability to quickly showcase 
        and test tracking with the JavaScript snippet and delivery of in-app messages. 
        Any alterations made to the example JavaScript snippet are made to work for this specific site and 
        should not be directly imported into your own web app.`,
    },
    {
      question: "Nice website design, is this a real business?",
      answer:
        "This website's design and nearly all of its content is pulled from Tailwind UI (https://tailwindui.com/templates/salient). This is not a real business website, any similarities are unintentional.",
    },
    // More questions...
  ]

  return <>
  <Header/>
  <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-4">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-600">Customer.io Web SDK Example Site</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Integrating with the Customer.io Web SDK</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                This website is only for demonstration purposes, and is not in any way an "officially supported" 
                example of how to use <Link href={"https://www.customer.io/docs/sdk/web/getting-started/"} target="_blank" className="font-semibold text-blue-600" title="Customer.io's Web SDK">Customer.io's Web SDK</Link> to track, and interact with, your customers.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">The idea behind this site.</h2>
              <p className="mt-6">
                Many times, customer's want to implement Customer.io's web SDK to track their customers and interact with them. 
                While Customer.io's documentation does a wonderful job of explaining many concepts, sometimes it is easier to see a live
                example, rather than read about it. Thus, the reason for this website.
              </p>
              <p className="mt-6">
                Jump to <Link href={"/configure#configuration"} className="font-semibold text-blue-600">the configuration page</Link> to link this site to your own Cusotmer.io workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Q&A: About This Project</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer/>
  </>
}