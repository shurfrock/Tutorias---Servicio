import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import _ from "lodash";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="flex items-center mr-auto text-lg font-medium">
          Orders <Lucide icon="ArrowRight" className="w-4 h-4 mx-2 !stroke-2" />
          {"#INV-" + fakerData[0].totals[0] + "807556"}
        </h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download Report
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Order Detail Side Menu */}
        <div className="col-span-12 2xl:col-span-4">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Transaction Details
              </div>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Invoice:
              <a href="" className="ml-1 underline decoration-dotted">
                INV/20220217/MPL/2053411933
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Purchase Date: 24 March 2022
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 mr-2 text-slate-500" />
              Transaction Status:
              <span className="text-xs text-success bg-success/30 border border-success/20 rounded-md px-1.5 py-0.5 ml-1">
                Completed
              </span>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Buyer Details
              </div>
              <a href="" className="flex items-center ml-auto text-slate-500">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View Details
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Name:
              <a href="" className="ml-1 underline decoration-dotted">
                {fakerData[0].users[0].name}
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Phone Number: +71828273732
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 mr-2 text-slate-500" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Payment Details
              </div>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Payment Method:
              <div className="ml-auto">Direct bank transfer</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Total Price (2 items):
              <div className="ml-auto">$12,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Total Shipping Cost (800 gr):
              <div className="ml-auto">$1,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Shipping Insurance:
              <div className="ml-auto">$600.00</div>
            </div>
            <div className="flex items-center pt-5 mt-5 font-medium border-t border-slate-200/60 dark:border-darkmode-400">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Grand Total:
              <div className="ml-auto">$15,000.00</div>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Shipping Information
              </div>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Courier: Left4code Express
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Tracking Number: 003005580322
              <Lucide icon="Copy" className="w-4 h-4 ml-2 text-slate-500" />
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 mr-2 text-slate-500" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Tracking Information
              </div>
            </div>
            <div className="pb-3">
              <div className="relative overflow-hidden -ml-4 md:-ml-8 before:content-[''] before:absolute before:w-px before:bg-slate-200/60 before:mx-auto before:left-0 before:right-0 before:top-[12%] before:bottom-[9%] before:dark:bg-darkmode-400">
                <div className="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-6 before:h-6 before:bg-primary/20 before:rounded-full before:inset-0 before:m-auto before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:inset-0 after:m-auto after:border-4 after:border-white/60 after:dark:border-darkmode-300">
                  <div className="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]">
                    25 Mar 2022, 10:28 AM
                  </div>
                  <div className="rounded-md px-4 py-3 text-left ml-[55%]">
                    <div className="font-medium">Transaction Completed.</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      Funds will be forwarded to the seller.
                    </div>
                  </div>
                </div>
                <div className="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200">
                  <div className="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]">
                    24 Mar 2022, 11:01 AM
                  </div>
                  <div className="rounded-md px-4 py-3 text-left ml-[55%]">
                    <div className="font-medium">The order has arrived.</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      Received by Angeline.
                    </div>
                  </div>
                </div>
                <div className="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200">
                  <div className="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]">
                    23 Mar 2022, 12:21 AM
                  </div>
                  <div className="rounded-md px-4 py-3 text-left ml-[55%]">
                    <div className="font-medium">The order has been sent.</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      The order is being shipped by courier.
                    </div>
                  </div>
                </div>
                <div className="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200">
                  <div className="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]">
                    23 Mar 2022, 08:28 AM
                  </div>
                  <div className="rounded-md px-4 py-3 text-left ml-[55%]">
                    <div className="font-medium">Payment Verified.</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      Payment has been received.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Order Detail Side Menu */}
        {/* BEGIN: Order Detail Content */}
        <div className="col-span-12 2xl:col-span-8">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Product Details
              </div>
            </div>
            <div>
              {_.take(fakerData, 10).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className="flex flex-col items-center py-4 border-b border-dashed md:flex-row first:pt-0 last:border-0 last:pb-0 border-slate-200 dark:border-darkmode-400"
                >
                  <div className="flex items-center md:mr-auto">
                    <div className="w-16 h-16 image-fit">
                      <img
                        alt="Rocketman - HTML Admin Template"
                        className="border-2 border-white rounded-lg shadow-md"
                        src={faker.images[0]}
                      />
                    </div>
                    <div className="ml-5">
                      <div className="font-medium">
                        {faker.products[0].name}
                      </div>
                      <div className="mt-1 text-slate-500">
                        2 items x ${faker.totals[0] + ",000.00"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-0 md:mr-12 md:mb-5">
                    <a href="" className="flex items-center justify-end">
                      <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Product
                      history
                    </a>
                  </div>
                  <div className="py-4 text-center border-dashed md:pl-12 md:pr-10 md:border-l md:text-left border-slate-200 dark:border-darkmode-400">
                    <div className="text-slate-500">Total Price</div>
                    <div className="mt-1 font-medium">$60.00</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* END: Order Detail Content */}
      </div>
    </>
  );
}

export default Main;
