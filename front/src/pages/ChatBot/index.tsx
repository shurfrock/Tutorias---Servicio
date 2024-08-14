import _ from "lodash";
import clsx from "clsx";
import { useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import { FormInput, FormTextarea } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Menu, Tab } from "../../base-components/Headless";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Chat Bot</h2>
      </div>
      <div className="grid">
        <div className="mt-5">
            <Button
                variant="secondary"
                rounded
                className="mr-2"
                onClick={() => navigate(-1)}
            >
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
                Volver
            </Button>
        </div>
        {/* BEGIN: Chat Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 mt-5">
          <div className="box intro-y">
            {/* BEGIN: Chat Active */}
            <div className="h-[768px] flex flex-col">
              <div className="flex flex-col px-5 py-4 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center">
                  <div className="relative flex-none w-10 h-10 sm:w-12 sm:h-12 image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="ml-3 mr-auto">
                    <div className="flex items-center">
                      <div className="text-base font-medium">
                        Chat Bot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-5 pt-5 overflow-y-scroll scrollbar-hidden">
                <div className="flex items-end float-left mb-10">
                  <div className="relative flex-none hidden w-10 h-10 mr-5 sm:block image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="-mb-6">
                    <div className="px-4 py-3 border rounded-md bg-slate-100 border-slate-200/60 dark:bg-darkmode-400 text-slate-500">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      2 mins ago
                    </div>
                  </div>
                </div>
                <div className="clear-both"></div>
                <div className="flex items-end float-right mb-10">
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                  </div>
                  <div className="relative flex-none hidden w-10 h-10 ml-5 sm:block image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[1].photos[0]}
                    />
                  </div>
                </div>
                <div className="clear-both"></div>
                <div className="flex items-end float-right mb-10">
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                  </div>
                  <div className="relative flex-none hidden w-10 h-10 ml-5 sm:block image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[1].photos[0]}
                    />
                  </div>
                </div>
                <div className="clear-both"></div>
                <div className="mt-5 mb-10 text-xs text-center text-slate-400 dark:text-slate-500">
                  12 June 2020
                </div>
                <div className="flex items-end float-left mb-10">
                  <div className="relative flex-none hidden w-10 h-10 mr-5 sm:block image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="-mb-6">
                    <div className="px-4 py-3 rounded-md bg-slate-100 dark:bg-darkmode-400 text-slate-500">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                  </div>
                </div>
                <div className="clear-both"></div>
                <div className="flex items-end float-right mb-10">
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="relative flex-none hidden w-10 h-10 ml-5 sm:block image-fit">
                    <img
                      alt="Rocketman - HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[1].photos[0]}
                    />
                  </div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="flex items-center pt-4 pb-10 border-t sm:py-4 border-slate-200/60 dark:border-darkmode-400">
                <FormTextarea
                  className="px-5 py-3 border-transparent shadow-none resize-none h-[46px] dark:bg-darkmode-600 focus:border-transparent focus:ring-0"
                  rows={1}
                  placeholder="Escribir mensaje..."
                ></FormTextarea>
                <a
                  className="flex items-center justify-center flex-none w-8 h-8 mr-5 text-white rounded-full sm:w-10 sm:h-10 bg-primary"
                >
                  <Lucide icon="Send" className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* END: Chat Active */}
          </div>
        </div>
        {/* END: Chat Content */}
      </div>
    </>
  );
}

export default Main;
