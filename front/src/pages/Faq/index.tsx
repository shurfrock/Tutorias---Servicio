import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Disclosure } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">FAQ</h2>
      </div>
      <div className="flex flex-col items-center px-5 pt-16 pb-24 intro-y box mt-7">
        {/* BEGIN: Invoice Title */}
        <div className="text-center">
          <div className="mt-5 text-4xl font-bold">
            Frequently Asked Questions.
          </div>
          <div className="mt-3 text-base text-slate-500">
            Below you will find answers to questions that are most often we get
            about Rocketman.
          </div>
          <a href="" className="block text-base mt-7 text-primary">
            Still have no clue? Chat with us.
          </a>
        </div>
        {/* END: Invoice Title */}
        {/* BEGIN: Invoice Content */}
        <Disclosure.Group variant="boxed" className="mt-16 md:w-5/6">
          <Disclosure>
            <Disclosure.Button>
              OpenSSL Essentials: Working with SSL Certificates, Private Keys
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button>
              Understanding IP Addresses, Subnets, and CIDR Notation
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button>
              {" "}
              How To Troubleshoot Common HTTP Error Codes{" "}
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button>
              {" "}
              An Introduction to Securing your Linux VPS{" "}
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
        <div className="flex flex-wrap items-center justify-center mt-5 gap-y-3">
          <div className="mr-3">Was this information helpful?</div>
          <div className="flex">
            <Button variant="outline-secondary" className="w-16 px-2 py-1 mr-2">
              <Lucide icon="Check" className="w-4 h-4 mr-2" /> Yes
            </Button>
            <Button variant="outline-secondary" className="w-16 px-2 py-1">
              <Lucide icon="X" className="w-4 h-4 mr-2" /> No
            </Button>
          </div>
        </div>
        {/* END: Invoice Content */}
      </div>
    </>
  );
}

export default Main;
