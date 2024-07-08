import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Menu, Tab } from "../../base-components/Headless";
import { FormSelect } from "../../base-components/Form";
import Table from "../../base-components/Table";
import Button from "../../base-components/Button";
import Litepicker from "../../base-components/Litepicker";
import fakerData from "../../utils/faker";
import ReportBarChart1 from "../../components/ReportBarChart1";
import ReportLineChart1 from "../../components/ReportLineChart1";
import ReportLineChart2 from "../../components/ReportLineChart2";
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import FileIcon from "../../base-components/FileIcon";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import unitedStatesUrl from "../../assets/images/countries/united-states.svg";
import franceUrl from "../../assets/images/countries/france.svg";
import spainUrl from "../../assets/images/countries/spain.svg";
import unitedKingdomUrl from "../../assets/images/countries/united-kingdom.svg";
import indiaUrl from "../../assets/images/countries/india.svg";
import brazilUrl from "../../assets/images/countries/brazil.svg";
import switzerlandUrl from "../../assets/images/countries/switzerland.svg";
import chromeUrl from "../../assets/images/browsers/chrome.png";
import edgeUrl from "../../assets/images/browsers/edge.png";
import firefoxUrl from "../../assets/images/browsers/firefox.png";
import operaUrl from "../../assets/images/browsers/opera.png";
import safariUrl from "../../assets/images/browsers/safari.png";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const [salesReportFilter, setSalesReportFilter] = useState<string>();
  const salesPerformance = () => {
    return [
      "bg-opacity-60",
      "bg-opacity-40",
      "bg-opacity-30",
      "bg-opacity-20",
      "bg-opacity-10",
    ][_.random(0, 4)];
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-6">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                General Report
              </h2>
              <div className="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
                />
                <Litepicker
                  value={generalReportFilter}
                  onChange={setGeneralReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="pl-10 sm:w-56 !box"
                />
              </div>
            </div>
            <div
              className={clsx([
                "relative mt-12 intro-y sm:mt-4",
                "before:content-[''] before:w-[96%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60",
              ])}
            >
              <div className="grid grid-cols-12 gap-0 py-0 divide-x divide-y box xl:py-5 xl:divide-y-0 divide-dashed divide-slate-200 dark:divide-white/5">
                <div
                  className={clsx([
                    "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                    "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                    "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                    "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                    "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                  ])}
                >
                  <div data-content>
                    <div className="flex">
                      <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-primary bg-primary/20 border-primary/20">
                        <Lucide
                          className="w-[1.3rem] h-[1.3rem]"
                          icon="PieChart"
                        />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="flex items-center pl-2 cursor-pointer text-success"
                          content="5.2% Higher than last month"
                        >
                          +5.2%
                          <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-2xl font-medium leading-7">
                      $149,300
                    </div>
                    <div className="mt-1 text-slate-500">Total Assets</div>
                  </div>
                </div>
                <div
                  className={clsx([
                    "relative py-5 xl:py-0 px-5 sm:!border-t-0 col-span-12 sm:col-span-6 xl:col-span-3",
                    "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                    "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                    "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                    "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                  ])}
                >
                  <div data-content>
                    <div className="flex">
                      <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-pending bg-pending/20 border-pending/20">
                        <Lucide
                          className="w-[1.3rem] h-[1.3rem]"
                          icon="CreditCard"
                        />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="flex items-center pl-2 cursor-pointer text-danger"
                          content="2% Lower than last month"
                        >
                          -2%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-2xl font-medium leading-7">
                      5.241
                    </div>
                    <div className="mt-1 text-slate-500">New Transactions</div>
                  </div>
                </div>
                <div
                  className={clsx([
                    "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                    "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                    "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                    "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                    "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                  ])}
                >
                  <div data-content>
                    <div className="flex">
                      <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-warning bg-warning/20 border-warning/20">
                        <Lucide
                          className="w-[1.3rem] h-[1.3rem]"
                          icon="ShoppingBag"
                        />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="flex items-center pl-2 cursor-pointer text-success"
                          content="4.1% Higher than last month"
                        >
                          +4.1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-2xl font-medium leading-7">
                      1.405
                    </div>
                    <div className="mt-1 text-slate-500">New Products</div>
                  </div>
                </div>
                <div
                  className={clsx([
                    "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                    "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                    "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                    "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                    "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                  ])}
                >
                  <div data-content>
                    <div className="flex">
                      <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-success bg-success/20 border-success/20">
                        <Lucide
                          className="w-[1.3rem] h-[1.3rem]"
                          icon="HardDrive"
                        />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="flex items-center pl-2 cursor-pointer text-danger"
                          content="1% Lower than last month"
                        >
                          -1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-2xl font-medium leading-7">
                      2.034
                    </div>
                    <div className="mt-1 text-slate-500">New Stores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 mt-7">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Sales Report
              </h2>
              <div className="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="pl-10 sm:w-56 !box"
                />
              </div>
            </div>
            <div className="p-5 mt-12 intro-y box sm:mt-4">
              <div className="items-center md:flex">
                <div className="mr-auto">
                  <div className="flex items-center">
                    <div className="text-2xl font-medium">$141,120.00</div>
                    <div className="flex items-center ml-3 cursor-pointer text-success">
                      +5.2% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="mt-1 text-slate-500">Total Assets</div>
                </div>
                <FormSelect
                  className="w-40 mt-3 md:ml-auto md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                  aria-label="General report filter"
                >
                  <option>All Transactions</option>
                  <option>Cash In</option>
                  <option>Cash Out</option>
                </FormSelect>
              </div>
              <div className="mt-6">
                <ReportLineChart1 height={260} />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Top Countries */}
          <div className="col-span-12 mt-4 md:col-span-4 lg:col-span-3 md:mt-7">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Top Countries
              </h2>
              <a href="" className="ml-auto truncate text-slate-500">
                View More
              </a>
            </div>
            <div className="p-5 mt-4 intro-y box">
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedStatesUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">United States</div>
                <div className="ml-auto">$147.88</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={franceUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">France</div>
                <div className="ml-auto">$96.68</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={spainUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">Spain</div>
                <div className="ml-auto">$68.24</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedKingdomUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">United Kingdom</div>
                <div className="ml-auto">$62.56</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={indiaUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">India</div>
                <div className="ml-auto">$62.56</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={brazilUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">Brazil</div>
                <div className="ml-auto">$51.18</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={switzerlandUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">Switzerland</div>
                <div className="ml-auto">$34.12</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={franceUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">France</div>
                <div className="ml-auto">$96.68</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedKingdomUrl}
                  />
                </div>
                <div className="pr-5 ml-3 truncate">United Kingdom</div>
                <div className="ml-auto">$62.56</div>
              </div>
            </div>
          </div>
          {/* END: Top Countries */}
          {/* BEGIN: Product Report */}
          <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 lg:mt-7">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Product Report
              </h2>
              <a href="" className="ml-auto truncate text-slate-500">
                View More
              </a>
            </div>
            <Tab.Group className="p-5 mt-4 intro-y box">
              <Tab.List variant="boxed-tabs" className="w-4/5 mx-auto">
                <Tab>
                  <Tab.Button as="button" className="w-full px-2">
                    Active
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button as="button" className="w-full px-2">
                    Inactive
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <div className="flex flex-col items-center justify-center mt-8">
                <div className="text-2xl font-medium leading-7">17.421</div>
                <div className="mt-1 text-slate-500 dark:text-slate-500">
                  Total Products
                </div>
              </div>
              <Tab.Panels className="mt-8">
                <Tab.Panel>
                  <div className="mx-auto -mb-2 w-44 lg:w-auto lg:-ml-2">
                    <ReportBarChart1 height={192} />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* END: Product Report */}
          {/* BEGIN: Seller Report */}
          <div className="col-span-12 mt-4 lg:col-span-9">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Seller Report
              </h2>
              <div className="flex items-center mt-3 sm:ml-auto sm:mt-0">
                <FormSelect
                  className="w-32 !box"
                  aria-label="General report filter"
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </FormSelect>
                <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                  Export to Excel
                </Button>
              </div>
            </div>
            <Tab.Group className="p-5 mt-12 intro-y box sm:mt-4">
              <div className="items-center sm:flex">
                <div className="mr-auto">
                  <div className="flex items-center">
                    <div className="text-2xl font-medium">24.112</div>
                    <div className="flex items-center ml-3 cursor-pointer text-danger">
                      -2.5% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="mt-1 text-slate-500">New Transactions</div>
                </div>
                <Tab.List
                  variant="boxed-tabs"
                  className="mt-3 rounded-lg sm:w-64 sm:mt-0"
                >
                  <Tab>
                    <Tab.Button className="w-full px-2" as="button">
                      Daily
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full px-2" as="button">
                      Weekly
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full px-2" as="button">
                      Monthly
                    </Tab.Button>
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels className="mt-5">
                <Tab.Panel>
                  <div className="overflow-x-auto overflow-y-hidden rounded-lg">
                    <Table striped className="-mb-1 table-striped">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="!font-normal text-slate-500">
                            #
                          </Table.Th>
                          <Table.Th className="!font-normal text-slate-500 text-right">
                            TODAY
                          </Table.Th>
                          <Table.Th className="!font-normal text-slate-500 text-right">
                            YESTERDAY
                          </Table.Th>
                          <Table.Th className="!font-normal text-slate-500 text-right">
                            %CHANGE
                          </Table.Th>
                          <Table.Th className="!font-normal text-slate-500 text-center">
                            YTD TREND
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td className="text-slate-500 whitespace-nowrap">
                            TOTAL ORDERS
                          </Table.Td>
                          <Table.Td className="text-right text-success">
                            231.152
                          </Table.Td>
                          <Table.Td className="text-right">131.152</Table.Td>
                          <Table.Td className="text-success">
                            <div className="flex items-center justify-end">
                              +41.%
                              <Lucide
                                icon="ArrowUp"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </Table.Td>
                          <Table.Td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={0} />
                            </div>
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td className="text-slate-500 whitespace-nowrap">
                            TOTAL SALES
                          </Table.Td>
                          <Table.Td className="text-right text-danger">
                            $612
                          </Table.Td>
                          <Table.Td className="text-right">$413</Table.Td>
                          <Table.Td className="text-danger">
                            <div className="flex items-center justify-end">
                              -2%
                              <Lucide
                                icon="ArrowDown"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </Table.Td>
                          <Table.Td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={1} />
                            </div>
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td className="text-slate-500 whitespace-nowrap">
                            AVG. PER CUSTOMER
                          </Table.Td>
                          <Table.Td className="text-right text-success">
                            $22.5
                          </Table.Td>
                          <Table.Td className="text-right">$18.5</Table.Td>
                          <Table.Td className="text-success">
                            <div className="flex items-center justify-end">
                              +51%
                              <Lucide
                                icon="ArrowUp"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </Table.Td>
                          <Table.Td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={2} />
                            </div>
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td className="text-slate-500 whitespace-nowrap">
                            AVG. PER SELLER
                          </Table.Td>
                          <Table.Td className="text-right text-danger">
                            $22.5
                          </Table.Td>
                          <Table.Td className="text-right">$10.5</Table.Td>
                          <Table.Td className="text-danger">
                            <div className="flex items-center justify-end">
                              +21%
                              <Lucide
                                icon="ArrowDown"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </Table.Td>
                          <Table.Td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={3} />
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* END: Seller Report */}
          {/* BEGIN: Seller Report */}
          <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Seller Report
              </h2>
              <a href="" className="ml-auto truncate text-slate-500">
                View More
              </a>
            </div>
            <div className="p-5 mt-4 intro-y box">
              <div className="relative px-3">
                <div className="w-40 mx-auto lg:w-auto">
                  <ReportDonutChart1
                    className="relative z-10 mt-2"
                    height={210}
                  />
                </div>
                <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                  <div className="text-2xl font-medium leading-7">1.215</div>
                  <div className="mt-1 text-slate-500">Total Sellers</div>
                </div>
              </div>
              <div className="mx-auto mt-6 w-52 lg:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/50"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="ml-auto">50%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 border rounded-full bg-pending/50 border-pending/50"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="ml-auto">30%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 border rounded-full bg-warning/50 border-warning/60"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="ml-auto">20%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Seller Report */}
          {/* BEGIN: Sales Performance */}
          <div className="col-span-12 mt-4">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Sales Performance
              </h2>
              <div className="flex items-center mt-3 sm:ml-auto sm:mt-0">
                <FormSelect
                  className="w-32 !box"
                  aria-label="General report filter"
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </FormSelect>
                <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                  Export to PDF
                </Button>
              </div>
            </div>
            <div className="p-5 mt-12 intro-y box sm:mt-4">
              <div className="overflow-x-auto overflow-y-hidden">
                <div className="min-w-[1000px] xl:min-w-0">
                  <div className="flex gap-[0.6rem]">
                    <div className="w-full -mr-12">
                      <div className="h-5 text-xs text-slate-500"></div>
                      <div className="grid grid-cols-4 mt-2 gap-[0.4rem] text-slate-500">
                        <div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2 relative">
                            <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-500">
                              Mon
                            </div>
                          </div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2 relative">
                            <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-500">
                              Tue
                            </div>
                          </div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2 relative">
                            <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-500">
                              Wed
                            </div>
                          </div>
                          <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                        </div>
                      </div>
                    </div>
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month) => (
                      <div key={month} className="w-full">
                        <div className="h-5 text-xs text-slate-500">
                          {month}
                        </div>
                        <div className="grid grid-cols-4 mt-2 gap-[0.4rem]">
                          {[1, 2, 3, 4].map((week) => (
                            <div key={week}>
                              {[
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                              ].map((day) => (
                                <Tippy
                                  as="div"
                                  key={day}
                                  content={`${_.random(
                                    1,
                                    50
                                  )} sales on 2 Sep, 2021`}
                                  className={clsx({
                                    "rounded-[0.17rem] w-full pt-[100%] mb-2 cursor-pointer zoom-in bg-primary":
                                      true,
                                    [salesPerformance()]: true,
                                  })}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center w-full mt-3 xl:justify-end">
                    <div className="mr-2 text-xs text-slate-500">Less</div>
                    <Tippy
                      as="div"
                      content="1 - 5 sales"
                      className="rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/10"
                    />
                    <Tippy
                      as="div"
                      content="5 - 15 sales"
                      className="rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/20"
                    />
                    <Tippy
                      as="div"
                      content="15 - 35 sales"
                      className="rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/30"
                    />
                    <Tippy
                      as="div"
                      content="35 - 65 sales"
                      className="rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/40"
                    />
                    <Tippy
                      as="div"
                      content="65+ sales"
                      className="rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/60"
                    />
                    <div className="mr-2 text-xs text-slate-500">More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Performance */}
        </div>
      </div>
      <div className="col-span-12 2xl:col-span-3">
        <div className="h-full pb-6 2xl:border-l border-slate-300/50 2xl:pt-6">
          <div className="grid grid-cols-12 2xl:pl-6 gap-x-6 gap-y-8">
            {/* BEGIN: Attachments */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Shared Files
                </h2>
                <a href="" className="ml-auto truncate text-slate-500">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="intro-x">
                  <div className="flex items-center px-5 py-3 mb-3 box">
                    <FileIcon className="w-12" variant="directory" />
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Documentation.pdf</div>
                      <div className="mt-1 text-xs text-slate-500">
                        1 KB Document File
                      </div>
                    </div>
                    <Menu>
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                          Link
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center px-5 py-3 mb-3 box">
                    <FileIcon className="w-12" variant="file" />
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Rocketman.xd</div>
                      <div className="mt-1 text-xs text-slate-500">
                        20 MB Audio File
                      </div>
                    </div>
                    <Menu>
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                          Link
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center px-5 py-3 mb-3 box">
                    <FileIcon className="w-12" variant="empty-directory" />
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Latest Report.xls</div>
                      <div className="mt-1 text-xs text-slate-500">
                        20 KB Zipped File
                      </div>
                    </div>
                    <Menu>
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                          Link
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>
                <Button
                  as="a"
                  href=""
                  className="w-full py-3 border-dashed intro-x border-slate-300 dark:border-darkmode-300"
                >
                  Launch File Manager
                </Button>
              </div>
            </div>
            {/* END: Attachments */}
            {/* BEGIN: Important Notes */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Important Notes
                </h2>
                <a href="" className="ml-auto truncate text-slate-500">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="p-5 intro-x box">
                  <Button className="w-full">
                    Add New Notes
                    <Lucide icon="ArrowRight" className="w-4 h-4 ml-auto" />
                  </Button>
                  <div className="mt-5">
                    <div className="font-medium">Why do we use it?</div>
                    <div className="flex items-center mt-2">
                      <div className="leading-relaxed text-slate-500">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                      <Menu className="ml-3">
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          <Lucide icon="MoreVertical" className="w-4 h-4" />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="Edit2" className="w-4 h-4 mr-2" />
                            Edit
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                  <div className="pt-5 mt-5 border-t border-dashed border-slate-200">
                    <div className="font-medium">Where can I get some?</div>
                    <div className="flex items-center mt-2">
                      <div className="leading-relaxed text-slate-500">
                        There are many variations of passages of Lorem Ipsum
                        available but the.
                      </div>
                      <Menu className="ml-3">
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          <Lucide icon="MoreVertical" className="w-4 h-4" />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="Edit2" className="w-4 h-4 mr-2" />
                            Edit
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Important Notes */}
            {/* BEGIN: Browser Visitors */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Browser Visitors
                </h2>
                <a href="" className="ml-auto truncate text-slate-500">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="p-5 intro-x box">
                  <div className="flex items-center">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={chromeUrl}
                    />
                    <div className="ml-4">Chrome</div>
                    <div className="ml-auto">25%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={edgeUrl}
                    />
                    <div className="ml-4">Microsoft Edge</div>
                    <div className="ml-auto">5%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={firefoxUrl}
                    />
                    <div className="ml-4">Firefox</div>
                    <div className="ml-auto">45%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={operaUrl}
                    />
                    <div className="ml-4">Opera</div>
                    <div className="ml-auto">2%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={safariUrl}
                    />
                    <div className="ml-4">Safari</div>
                    <div className="ml-auto">20%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Browser Visitors */}
            {/* BEGIN: Transactions */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Transactions
                </h2>
                <a href="" className="ml-auto truncate text-slate-500">
                  View More
                </a>
              </div>
              <div className="mt-4">
                {_.take(fakerData, 4).map((faker, fakerKey) => (
                  <div key={fakerKey} className="intro-x">
                    <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
                      <div className="mr-auto">
                        <div className="font-medium">{faker.users[0].name}</div>
                        <div className="mt-1 text-xs text-slate-500">
                          {faker.dates[0]}
                        </div>
                      </div>
                      <div
                        className={clsx({
                          "text-success": faker.trueFalse[0],
                          "text-danger": !faker.trueFalse[0],
                        })}
                      >
                        {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  as="a"
                  href=""
                  className="w-full py-3 border-dashed intro-x border-slate-300 dark:border-darkmode-300"
                >
                  View More
                </Button>
              </div>
            </div>
            {/* END: Transactions */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
