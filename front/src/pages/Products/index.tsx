import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import TomSelect from "../../base-components/TomSelect";
import Pagination from "../../base-components/Pagination";
import Tippy from "../../base-components/Tippy";
import Table from "../../base-components/Table";
import {
  FormInput,
  FormInline,
  FormLabel,
  FormSelect,
  FormSwitch,
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
        <h2 className="mr-auto text-lg font-medium">Products</h2>
        <div className="flex flex-wrap w-full mt-4 sm:w-auto gap-y-3 sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Product
          </Button>
          <Button className="!box">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Download Report
          </Button>
        </div>
      </div>
      {/* BEGIN: Filter */}
      <div className="flex flex-col p-5 intro-y box mt-7 xl:flex-row gap-y-3">
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="crud-form-1">Product Name</FormLabel>
          <FormInput
            id="crud-form-1"
            type="text"
            className="w-full"
            placeholder="Product name.."
          />
        </FormInline>
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="crud-form-2">Category</FormLabel>
          <TomSelect
            id="crud-form-2"
            value={categories}
            onChange={setCategories}
            className="flex-1 w-full"
            multiple
          >
            {fakerData.map((faker, fakerKey) => (
              <option key={fakerKey} value={faker.products[0].category}>
                {faker.products[0].category}
              </option>
            ))}
          </TomSelect>
        </FormInline>
        <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
          <FormLabel htmlFor="crud-form-1">Status</FormLabel>
          <FormSelect className="w-full" aria-label="Default select example">
            <option>Active</option>
            <option>Inactive</option>
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
                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 py-5 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <div className="flex">
                    <div className="w-10 h-10 image-fit zoom-in">
                      <Tippy
                        as="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        src={faker.images[0]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                    <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                      <Tippy
                        as="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        src={faker.images[1]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                    <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                      <Tippy
                        as="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        src={faker.images[2]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                  </div>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker.products[0].name}
                  </a>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    {faker.products[0].category}
                  </div>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  {faker.products[0].price}
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  {faker.stocks[0]}
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <FormSwitch>
                    <FormSwitch.Input
                      checked={faker.trueFalse[0]}
                      onChange={() => {}}
                      className="mx-auto"
                      type="checkbox"
                    />
                  </FormSwitch>
                </Table.Td>
                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                  <div className="flex items-center justify-center">
                    <a className="flex items-center mr-3" href="#">
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                      Edit
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="#"
                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
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
