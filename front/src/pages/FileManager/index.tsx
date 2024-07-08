import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Menu } from "../../base-components/Headless";
import FileIcon from "../../base-components/FileIcon";
import { FormCheck, FormInput } from "../../base-components/Form";
import fakerData from "../../utils/faker";
import _ from "lodash";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">File Manager</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Upload" className="w-4 h-4 mr-2" /> Upload New Files
          </Button>
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-5 box">
        {/* BEGIN: File Manager Side Menu */}
        <div className="col-span-12 p-5 border-b xl:col-span-4 2xl:col-span-2 xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 rounded-l-md">
          <div>
            <a
              href=""
              className="flex items-center px-3 py-2 font-medium text-white rounded-md bg-primary dark:bg-darkmode-800"
            >
              <Lucide icon="Mail" className="w-4 h-4 mr-2" /> All Files
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
        {/* END: File Manager Side Menu */}
        {/* BEGIN: File Manager Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-10">
          <div className="flex flex-wrap items-center px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
            <Button variant="outline-secondary" className="mr-2">
              <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Create New
              Folder
            </Button>
            <Button variant="outline-secondary" className="mr-auto">
              <Lucide icon="UserPlus" className="w-4 h-4 mr-2" /> File
              Permission
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
          <div className="grid grid-cols-12 gap-3 px-5 pb-4 border-b sm:gap-6 border-slate-200/60">
            {fakerData.map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className="col-span-6 intro-y sm:col-span-4 md:col-span-3 2xl:col-span-2"
              >
                <div className="relative px-3 pt-8 pb-5 rounded-md shadow-none box border-slate-200/60 dark:border-darkmode-400 sm:px-5 zoom-in">
                  <div className="absolute top-0 left-0 mt-3 ml-3">
                    <FormCheck.Input
                      className="border-slate-400"
                      type="checkbox"
                      checked={faker.trueFalse[0]}
                      onChange={() => {}}
                    />
                  </div>
                  {(() => {
                    if (faker.files[0].type == "Empty Folder")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="empty-directory"
                        />
                      );
                    else if (faker.files[0].type == "Folder")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="directory"
                        />
                      );
                    else if (faker.files[0].type == "Image")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="image"
                          src={_.toLower(faker.files[0]["fileName"])}
                        />
                      );
                    else
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="directory"
                          type={faker.files[0].type}
                        />
                      );
                  })()}
                  <a
                    href=""
                    className="block mt-4 font-medium text-center truncate"
                  >
                    {
                      faker.files[0].fileName.split("/")[
                        faker.files[0].fileName.split("/").length - 1
                      ]
                    }
                  </a>
                  <div className="text-slate-500 text-xs text-center mt-0.5">
                    {faker.files[0].size}
                  </div>
                  <Menu className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                    <Menu.Button as="a" className="block w-5 h-5" href="#">
                      <Lucide
                        icon="MoreVertical"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                        File
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
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
        {/* END: File Manager Content */}
      </div>
    </>
  );
}

export default Main;
