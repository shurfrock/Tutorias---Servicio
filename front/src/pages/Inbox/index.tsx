import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Menu } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import clsx from "clsx";
import { FormCheck, FormInput } from "../../base-components/Form";

function Main() {
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
            <a
              href=""
              className="flex items-center px-3 py-2 font-medium text-white rounded-md bg-primary dark:bg-darkmode-800"
            >
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
        <div className="col-span-12 xl:col-span-8 2xl:col-span-10">
          <div className="flex flex-wrap items-center px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
            <Button variant="outline-secondary" className="mr-2">
              <Lucide icon="Users" className="w-4 h-4 mr-2" /> Create Group
            </Button>
            <Button variant="outline-secondary" className="mr-auto">
              <Lucide icon="Video" className="w-4 h-4 mr-2" /> Start a Video
              Call
            </Button>
            <div className="w-[350px] relative">
              <FormInput
                type="text"
                className="pl-10"
                placeholder="Search for messages or users..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto ml-3 text-slate-400"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse px-5 pb-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
            <div className="flex items-center px-5 pt-5 mt-3 -mx-5 border-t sm:mt-0 sm:border-0 border-slate-200/60 sm:pt-0 sm:mx-0 sm:px-0">
              <FormCheck.Input
                className="border-slate-400 checked:border-primary"
                type="checkbox"
              />
              <Menu className="ml-1" placement="bottom-start">
                <Menu.Button className="block w-5 h-5">
                  <Lucide icon="ChevronDown" className="w-5 h-5" />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>All</Menu.Item>
                  <Menu.Item>None</Menu.Item>
                  <Menu.Item>Read</Menu.Item>
                  <Menu.Item>Unread</Menu.Item>
                  <Menu.Item>Starred</Menu.Item>
                  <Menu.Item>Unstarred</Menu.Item>
                </Menu.Items>
              </Menu>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="RefreshCw" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="MoreHorizontal" className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center sm:ml-auto">
              <div className="">1 - 50 of 5,238</div>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="Settings" className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="overflow-x-auto sm:overflow-x-visible">
            {fakerData.map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div
                  className={clsx([
                    "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                    "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                    !faker.trueFalse[0] &&
                      "bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70",
                    faker.trueFalse[0] &&
                      "bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600",
                  ])}
                >
                  <div className="flex px-5 py-3">
                    <div className="flex items-center flex-none mr-5 w-72">
                      <FormCheck.Input
                        className="flex-none border-slate-400 checked:border-primary"
                        type="checkbox"
                        checked={!faker.trueFalse[0]}
                        onChange={() => {}}
                      />
                      <a
                        href="#"
                        className="flex items-center justify-center flex-none w-5 h-5 ml-4 text-slate-400"
                      >
                        <Lucide icon="Star" className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center flex-none w-5 h-5 ml-2 text-slate-400"
                      >
                        <Lucide icon="Bookmark" className="w-4 h-4" />
                      </a>
                      <div className="relative flex-none w-6 h-6 ml-5 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={faker.photos[0]}
                        />
                      </div>
                      <div
                        className={clsx([
                          "ml-3 truncate",
                          faker.trueFalse[0] && "font-medium",
                        ])}
                      >
                        {faker.users[0].name}
                      </div>
                    </div>
                    <div className="w-64 truncate sm:w-auto">
                      <span
                        className={clsx([
                          "ml-3 truncate",
                          faker.trueFalse[0] && "font-medium",
                        ])}
                      >
                        {faker.news[0].superShortContent}
                      </span>
                      {faker.news[0].shortContent}
                    </div>
                    <div
                      className={clsx([
                        "pl-10 ml-auto whitespace-nowrap",
                        faker.trueFalse[0] && "font-medium",
                      ])}
                    >
                      {faker.times[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500">
            <div>4.41 GB (25%) of 17 GB used Manage</div>
            <div className="mt-2 sm:ml-auto sm:mt-0">
              Last account activity: 36 minutes ago
            </div>
          </div>
        </div>
        {/* END: Inbox Content */}
      </div>
    </>
  );
}

export default Main;
