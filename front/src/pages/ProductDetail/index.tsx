import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Tab } from "../../base-components/Headless";
import Pagination from "../../base-components/Pagination";
import Table from "../../base-components/Table";
import {
  FormInput,
  FormInline,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import fakerData from "../../utils/faker";
import _ from "lodash";
import { useState } from "react";

function Main() {
  const [categories, setCategories] = useState([
    "Photography",
    "christianbale@left4code.com",
    "angelinajolie@left4code.com",
    "brucewillis@left4code.com",
    "nicolascage@left4code.com",
  ]);

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="flex items-center mr-auto text-lg font-medium">
          Products{" "}
          <Lucide icon="ArrowRight" className="w-4 h-4 mx-2 !stroke-2" />
          {fakerData[0].products[0].name}
        </h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> View Full Report
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Product Detail Side Menu */}
        <div className="col-span-12 2xl:col-span-3">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Product Details
              </div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Stock-Keeping Unit: INV-33807556
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Release Date: 24 March 2022
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 mr-2 text-slate-500" />
              Condition:
              <span className="text-xs text-success bg-success/20 border border-success/20 rounded-md px-1.5 py-0.5 ml-1">
                New
              </span>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Map" className="w-4 h-4 mr-2 text-slate-500" />
              Category:
              <a href="" className="ml-1 underline decoration-dotted">
                {fakerData[0].products[0].category}
              </a>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Spesification
              </div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="flex items-center">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Brand:{" "}
              <a href="" className="ml-1 underline decoration-dotted">
                Apple
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 mr-2 text-slate-500" />{" "}
              Signal Status: Activated
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Description</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>{fakerData[0]["news"][0]["shortContent"]}</div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Product Images
              </div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="grid grid-cols-12 gap-2 mt-2">
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[0]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[1]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[2]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[3]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[4]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[5]}
                />
              </div>
              <div className="h-16 col-span-3 cursor-pointer image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={fakerData[0].images[6]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* END: Product Detail Side Menu */}
        {/* BEGIN: Product Detail Content */}
        <Tab.Group className="col-span-12 2xl:col-span-9">
          <div className="p-3 box intro-y">
            <Tab.List variant="pills" className="flex-col md:flex-row">
              <Tab>
                <Tab.Button
                  className="w-full flex items-center justify-center !rounded-lg py-3"
                  as="button"
                >
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Active
                  Transactions
                </Tab.Button>
              </Tab>
              <Tab>
                <Tab.Button
                  className="w-full flex items-center justify-center !rounded-lg py-3"
                  as="button"
                >
                  <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Transaction
                  History
                </Tab.Button>
              </Tab>
              <Tab>
                <Tab.Button
                  className="w-full flex items-center justify-center !rounded-lg py-3"
                  as="button"
                >
                  <Lucide icon="HardDrive" className="w-4 h-4 mr-2" /> Stock
                  Management
                </Tab.Button>
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <div className="p-5 mt-5 box intro-y">
                <div className="flex flex-col xl:flex-row gap-y-3">
                  <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
                    <FormLabel htmlFor="crud-form-1">Invoice</FormLabel>
                    <FormInput
                      id="crud-form-1"
                      type="text"
                      className="w-full"
                      placeholder="Invoice.."
                    />
                  </FormInline>
                  <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
                    <FormLabel htmlFor="crud-form-1">Status</FormLabel>
                    <FormSelect
                      className="w-full"
                      aria-label="Default select example"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </FormSelect>
                  </FormInline>
                  <Button variant="primary" className="shadow-md">
                    <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
                  </Button>
                </div>
                <div className="overflow-auto lg:overflow-visible">
                  <Table striped className="mt-5">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap !py-5">
                          Invoice
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Status
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Buyer Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Payment
                        </Table.Th>
                        <Table.Th className="text-center whitespace-nowrap">
                          Action
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {_.take(fakerData, 12).map((faker, fakerKey) => (
                        <Table.Tr key={fakerKey}>
                          <Table.Td className="!py-7">
                            <a
                              href=""
                              className="underline decoration-dotted whitespace-nowrap"
                            >
                              {"#INV-" + faker.totals[0] + "807556"}
                            </a>
                          </Table.Td>
                          <Table.Td>
                            <div className="font-medium whitespace-nowrap">
                              {faker.users[0].name}
                            </div>
                            {(() => {
                              if (faker.trueFalse[0])
                                return (
                                  <div className="mt-1 text-xs text-slate-500">
                                    Ohio, Ohio
                                  </div>
                                );
                              else
                                return (
                                  <div className="mt-1 text-xs text-slate-500">
                                    California, LA
                                  </div>
                                );
                            })()}
                          </Table.Td>
                          <Table.Td>
                            {(() => {
                              if (faker.trueFalse[0])
                                return (
                                  <span className="px-2 py-1 text-xs border rounded-full whitespace-nowrap text-success bg-success/20 border-success/20">
                                    Shipping
                                  </span>
                                );
                              else
                                return (
                                  <span className="px-2 py-1 text-xs border rounded-full whitespace-nowrap text-warning bg-warning/20 border-warning/20">
                                    Pending Payment
                                  </span>
                                );
                            })()}
                          </Table.Td>
                          <Table.Td>
                            {(() => {
                              if (faker.trueFalse[0])
                                return (
                                  <>
                                    <div className="whitespace-nowrap">
                                      Checking payments
                                    </div>
                                    <div className="mt-1 text-xs text-slate-500">
                                      25 March, 12:55
                                    </div>
                                  </>
                                );
                              else
                                return (
                                  <>
                                    <div className="whitespace-nowrap">
                                      Direct bank transfer
                                    </div>
                                    <div className="mt-1 text-xs text-slate-500">
                                      30 March, 11:00
                                    </div>
                                  </>
                                );
                            })()}
                          </Table.Td>
                          <Table.Td>
                            <a
                              className="flex items-center justify-center whitespace-nowrap"
                              href="#"
                            >
                              <Lucide
                                icon="FileText"
                                className="w-4 h-4 mr-1"
                              />
                              View Details
                            </a>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </div>
              </div>
              {/* BEGIN: Pagination */}
              <div className="flex flex-wrap items-center mt-5 mb-16 intro-y sm:flex-row sm:flex-nowrap">
                <Pagination className="w-full sm:w-auto sm:mr-auto">
                  <Pagination.Link>
                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>1</Pagination.Link>
                  <Pagination.Link active>2</Pagination.Link>
                  <Pagination.Link>3</Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                  </Pagination.Link>
                </Pagination>
                <FormSelect className="w-20 mt-3 !box sm:mt-0">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </FormSelect>
              </div>
              {/* END: Pagination */}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* END: Product Detail Content */}
      </div>
    </>
  );
}

export default Main;
