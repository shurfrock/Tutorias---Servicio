import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Menu } from "../../base-components/Headless";
import fakerData from "../../utils/faker";

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
        <div className="col-span-12 p-5 xl:col-span-8 2xl:col-span-10">
          <div className="flex flex-wrap items-center gap-y-5">
            <h2 className="mr-auto text-2xl font-medium">
              {fakerData[0].news[0].title}
            </h2>
            <div className="flex items-center">
              <div className="">March 25, 09:29</div>
              <a
                href="#"
                className="flex items-center justify-center w-5 h-5 ml-5"
              >
                <Lucide icon="Settings" className="w-4 h-4" />
              </a>
              <Menu>
                <Menu.Button className="flex items-center justify-center w-5 h-5 ml-5">
                  <Lucide icon="CornerUpRight" className="w-4 h-4" />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Reply to all
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Forward
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>
                    <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Report
                    spam
                  </Menu.Item>
                </Menu.Items>
              </Menu>
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
            </div>
          </div>
          <div className="flex items-center mt-5">
            <div className="relative flex-none w-9 h-9 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="rounded-full"
                src={fakerData[0].photos[0]}
              />
            </div>
            <div className="ml-3 mr-auto">
              <div className="flex flex-wrap items-center gap-y-1">
                <div className="mr-2 font-medium">
                  {fakerData[0].users[0].name}
                </div>
                <div className="text-xs text-slate-500">
                  {fakerData[0].users[0].email}
                </div>
              </div>
              <Menu placement="bottom-start">
                <Menu.Button className="flex items-center text-xs text-slate-500 mt-0.5">
                  to me <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Mark as read
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Mark as
                    unread
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Move to
                    spam
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Move to
                    trash
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="mt-10">
            <p className="mt-5">Hi {fakerData[0].users[1].name},</p>
            <p className="mt-5">{fakerData[1].news[0].content}</p>
            <p className="mt-5">{fakerData[2].news[0].content}</p>
            <p className="mt-5">{fakerData[3].news[0].content}</p>
            <p className="mt-5">{fakerData[4].news[0].content}</p>
            <p className="mt-5">
              Regards, <br />
              {fakerData[0].users[0].name}
            </p>
          </div>
          <div className="pb-16 mt-10">
            <div className="flex flex-wrap mb-5 gap-y-2">
              <div className="mr-auto font-medium">
                Attachments (2 files, 200,05 MB)
              </div>
              <div className="flex">
                <a href="#" className="w-24 text-primary">
                  View All
                </a>
                <a href="#" className="w-24 ml-2 text-primary">
                  Download All
                </a>
              </div>
            </div>
            <div className="flex flex-wrap mt-3 gap-y-2">
              <div className="flex items-center mr-auto">
                <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                annual-report-2022.pdf (180.05 MB)
              </div>
              <div className="flex">
                <a href="#" className="w-24 text-primary">
                  View
                </a>
                <a href="#" className="w-24 ml-2 text-primary">
                  Download
                </a>
              </div>
            </div>
            <div className="flex flex-wrap mt-3 gap-y-2">
              <div className="flex items-center mr-auto">
                <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                weekly-report-2022.pdf (20 MB)
              </div>
              <div className="flex">
                <a href="#" className="w-24 text-primary">
                  View
                </a>
                <a href="#" className="w-24 ml-2 text-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END: Inbox Content */}
      </div>
    </>
  );
}

export default Main;
