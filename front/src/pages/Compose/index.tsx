import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import TomSelect from "../../base-components/TomSelect";
import { FormInput, FormLabel, FormInline } from "../../base-components/Form";
import { ClassicEditor } from "../../base-components/Ckeditor";
import fakerData from "../../utils/faker";
import { useState } from "react";

function Main() {
  const [to, setTo] = useState([
    "johnnydepp@left4code.com",
    "christianbale@left4code.com",
    "angelinajolie@left4code.com",
    "brucewillis@left4code.com",
    "nicolascage@left4code.com",
  ]);
  const [cc, setCc] = useState<string[]>([]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Inbox</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Compose New Mail
          </Button>
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-5 box">
        {/* BEGIN: Inbox Side Menu */}
        <div className="col-span-12 p-5 border-b xl:col-span-4 2xl:col-span-2 xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 rounded-l-md">
          <div>
            <a href="" className="flex items-center px-3 py-2 rounded-md">
              <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Inbox
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Star" className="w-4 h-4 mr-2" /> Marked
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Draft
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Send" className="w-4 h-4 mr-2" /> Sent
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
            </a>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-400/20 dark:border-darkmode-400">
            <a href="" className="flex items-center px-3 py-2 truncate">
              <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
              Custom Work
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
            >
              <div className="w-2 h-2 mr-3 rounded-full bg-success"></div>
              Important Meetings
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
            >
              <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
              Work
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
            >
              <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
              Design
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
            >
              <div className="w-2 h-2 mr-3 rounded-full bg-danger"></div>
              Next Week
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
            >
              <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
            </a>
          </div>
        </div>
        {/* END: Inbox Side Menu */}
        {/* BEGIN: Inbox Content */}
        <div className="col-span-12 p-5 pb-16 xl:col-span-8 2xl:col-span-10">
          <FormInline className="flex-col items-start 2xl:flex-row gap-y-3 2xl:items-center">
            <FormLabel
              htmlFor="to"
              className="sm:w-20 !text-left 2xl:!text-right"
            >
              To
            </FormLabel>
            <TomSelect
              id="to"
              value={to}
              onChange={setTo}
              className="flex-1 w-full"
              multiple
            >
              {fakerData.map((faker, fakerKey) => (
                <option key={fakerKey} value={faker.users[0].email}>
                  {faker.users[0].email}
                </option>
              ))}
            </TomSelect>
          </FormInline>
          <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
            <FormLabel
              htmlFor="cc"
              className="sm:w-20 !text-left 2xl:!text-right"
            >
              Cc
            </FormLabel>
            <TomSelect
              id="cc"
              value={cc}
              onChange={setCc}
              className="flex-1 w-full"
              multiple
            >
              {fakerData.map((faker, fakerKey) => (
                <option key={fakerKey} value={faker.users[0].email}>
                  {faker.users[0].email}
                </option>
              ))}
            </TomSelect>
          </FormInline>
          <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
            <FormLabel
              htmlFor="mail"
              className="sm:w-20 !text-left 2xl:!text-right"
            >
              Subject
            </FormLabel>
            <FormInput id="mail" type="text" />
          </FormInline>
          <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
            <FormLabel className="sm:w-20 !text-left 2xl:!text-right">
              Mail
            </FormLabel>
            <div className="flex-1 w-full">
              <ClassicEditor
                value={editorData}
                onChange={setEditorData}
                config={editorConfig}
              />
            </div>
          </FormInline>
          <div className="mt-5 2xl:ml-20 2xl:pl-5">
            <Button variant="primary" type="button" className="w-24 mr-1">
              Send
            </Button>
            <Button variant="outline-secondary" type="button" className="w-24">
              Cancel
            </Button>
          </div>
        </div>
        {/* END: Inbox Content */}
      </div>
    </>
  );
}

export default Main;
