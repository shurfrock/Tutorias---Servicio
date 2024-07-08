import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import TomSelect from "../../base-components/TomSelect";
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

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Orders</h2>
        <div className="flex flex-wrap w-full mt-4 sm:w-auto gap-y-3 sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download Report
          </Button>
          <Button className="!box">
            <Lucide icon="UploadCloud" className="w-4 h-4 mr-2" /> Cloud Backup
          </Button>
        </div>
      </div>
      {/* BEGIN: Filter */}
      <div className="flex flex-col p-5 intro-y box mt-7 xl:flex-row gap-y-3">
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="invoice">Invoice</FormLabel>
          <FormInput
            id="invoice"
            type="text"
            className="w-full"
            placeholder="Invoice.."
          />
        </FormInline>
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="buyer-name">Buyer Name</FormLabel>
          <FormInput
            id="buyer-name"
            type="text"
            className="w-full"
            placeholder="Buyer name.."
          />
        </FormInline>
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="status">Status</FormLabel>
          <FormSelect
            id="status"
            className="w-full"
            aria-label="Default select example"
          >
            <option>Pending Payment</option>
            <option>Confirmed</option>
            <option>Packing</option>
            <option>Shipping</option>
            <option>Completed</option>
          </FormSelect>
        </FormInline>
        <Button variant="primary" className="shadow-md">
          <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
        </Button>
      </div>
      {/* END: Filter */}
      {/* BEGIN: Data List */}
      <div className="overflow-auto intro-y lg:overflow-visible">
        <Table className="border-spacing-y-[10px] border-separate">
          <Table.Tbody>
            {_.take(fakerData, 9).map((faker, fakerKey) => (
              <Table.Tr key={fakerKey} className="intro-x">
                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 py-8 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <a
                    href=""
                    className="underline decoration-dotted whitespace-nowrap"
                  >
                    {"#INV-" + faker.totals[0] + "807556"}
                  </a>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
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
                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  {(() => {
                    if (faker.trueFalse[0])
                      return (
                        <span className="px-2 py-1 text-xs border rounded-full whitespace-nowrap text-success bg-success/20 border-success/20">
                          Completed
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
                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  {(() => {
                    if (faker.trueFalse[0])
                      return (
                        <>
                          <div className="whitespace-nowrap">
                            Direct bank transfer
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
                            Checking payments
                          </div>
                          <div className="mt-1 text-xs text-slate-500">
                            30 March, 11:00
                          </div>
                        </>
                      );
                  })()}
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md text-right bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <div className="pr-16">${faker.totals[0] + ",000,00"}</div>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                  <div className="flex items-center justify-center">
                    <a
                      className="flex items-center mr-3 whitespace-nowrap"
                      href="#"
                    >
                      <Lucide icon="FileText" className="w-4 h-4 mr-1" /> View
                      Details
                    </a>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
      {/* END: Data List */}
      {/* BEGIN: Pagination */}
      <div className="flex flex-wrap items-center mt-5 mb-12 intro-y sm:flex-row sm:flex-nowrap">
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
    </>
  );
}

export default Main;
