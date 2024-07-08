import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Pricing</h2>
      </div>
      <div className="flex flex-col items-center px-5 pt-16 pb-24 text-center intro-y box mt-7">
        {/* BEGIN: Pricing Title */}
        <div className="text-base text-slate-500">Free trial for 7 days.</div>
        <div className="mt-5 text-4xl font-bold">Buy once, use it forever.</div>
        <div className="mt-3 text-base text-slate-500">
          Get lifetime access to all features today, plus any updates <br />
          we release in the future for a simple one-time price.
        </div>
        <a href="" className="block text-base mt-7 text-primary">
          Have a question? Chat with us.
        </a>
        {/* END: Pricing Title */}
        {/* BEGIN: Pricing Content */}
        <div className="flex flex-col mt-20 border rounded-lg intro-y lg:flex-row border-slate-200 md:w-5/6">
          <div className="flex-1 px-5 py-16 intro-y lg:mr-4 bg-slate-50 rounded-l-md dark:bg-darkmode-600">
            <Lucide
              icon="CreditCard"
              className="block w-12 h-12 mx-auto text-primary"
            />
            <div className="mt-10 text-xl font-medium text-center">
              Basic Plan
            </div>
            <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
              1 Domain <span className="mx-1">•</span> 10 Users
              <span className="mx-1">•</span> 20 Copies
            </div>
            <div className="px-10 mx-auto mt-2 text-center text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="flex justify-center">
              <div className="relative mx-auto mt-8 text-5xl font-semibold">
                <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span>{" "}
                35
              </div>
            </div>
            <Button
              variant="primary"
              rounded
              type="button"
              className="block px-4 py-3 mx-auto mt-8"
            >
              PURCHASE NOW
            </Button>
          </div>
          <div className="intro-y box -mx-1 md:-mx-5 -my-8 border-b border-t flex-1 p-5 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400 dark:bg-darkmode-500 py-16 !z-50">
            <Lucide
              icon="ShoppingBag"
              className="block w-12 h-12 mx-auto text-primary"
            />
            <div className="mt-10 text-xl font-medium text-center">
              Enterprise
            </div>
            <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
              1 Domain <span className="mx-1">•</span> 10 Users
              <span className="mx-1">•</span> 20 Copies
            </div>
            <div className="px-10 mx-auto mt-2 text-center text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="flex justify-center">
              <div className="relative mx-auto mt-8 text-5xl font-semibold">
                <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span>{" "}
                120
              </div>
            </div>
            <Button
              variant="primary"
              rounded
              type="button"
              className="block px-4 py-3 mx-auto mt-8"
            >
              PURCHASE NOW
            </Button>
          </div>
          <div className="flex-1 px-5 py-16 intro-y lg:ml-4 bg-slate-50 rounded-r-md dark:bg-darkmode-600">
            <Lucide
              icon="Briefcase"
              className="block w-12 h-12 mx-auto text-primary"
            />
            <div className="mt-10 text-xl font-medium text-center">
              Business
            </div>
            <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
              1 Domain <span className="mx-1">•</span> 10 Users
              <span className="mx-1">•</span> 20 Copies
            </div>
            <div className="px-10 mx-auto mt-2 text-center text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="flex justify-center">
              <div className="relative mx-auto mt-8 text-5xl font-semibold">
                <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span>{" "}
                60
              </div>
            </div>
            <Button
              variant="primary"
              rounded
              type="button"
              className="block px-4 py-3 mx-auto mt-8"
            >
              PURCHASE NOW
            </Button>
          </div>
        </div>
        {/* END: Pricing Content */}
      </div>
    </>
  );
}

export default Main;
