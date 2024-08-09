import _ from "lodash";
import clsx from "clsx";
import { useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import { FormInput, FormTextarea } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Menu, Tab } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Chat Bot</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Ayuda...
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Chat Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
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
                        {fakerData[0].users[0].name}
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
                  <Menu className="hidden my-auto ml-3 sm:block">
                    <Menu.Button
                      as="a"
                      className="w-4 h-4 text-slate-500"
                      href="#"
                    >
                      <Lucide icon="MoreVertical" className="w-4 h-4" />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="CornerUpLeft" className="w-4 h-4 mr-2" />
                        Reply
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="clear-both"></div>
                <div className="flex items-end float-right mb-10">
                  <Menu className="hidden my-auto mr-3 sm:block">
                    <Menu.Button
                      tag="a"
                      className="w-4 h-4 text-slate-500"
                      href="#"
                    >
                      <Lucide icon="MoreVertical" className="w-4 h-4" />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="CornerUpLeft" className="w-4 h-4 mr-2" />
                        Reply
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      1 mins ago
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
                  <Menu className="hidden my-auto mr-3 sm:block">
                    <Menu.Button
                      as="a"
                      className="w-4 h-4 text-slate-500"
                      href="#"
                    >
                      <Lucide icon="MoreVertical" className="w-4 h-4" />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="CornerUpLeft" className="w-4 h-4 mr-2" />
                        Reply
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      59 secs ago
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
                    <div className="mt-2 text-xs text-slate-500">
                      10 secs ago
                    </div>
                  </div>
                  <Menu className="hidden my-auto ml-3 sm:block">
                    <Menu.Button
                      tag="a"
                      className="w-4 h-4 text-slate-500"
                      href="#"
                    >
                      <Lucide icon="MoreVertical" className="w-4 h-4" />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="CornerUpLeft" className="w-4 h-4 mr-2" />
                        Reply
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="clear-both"></div>
                <div className="flex items-end float-right mb-10">
                  <Menu className="hidden my-auto mr-3 sm:block">
                    <Menu.Button
                      tag="a"
                      className="w-4 h-4 text-slate-500"
                      href="#"
                    >
                      <Lucide icon="MoreVertical" className="w-4 h-4" />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="CornerUpLeft" className="w-4 h-4 mr-2" />
                        Reply
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <div className="-mb-6">
                    <div className="px-4 py-3 text-white rounded-md bg-primary">
                      Lorem ipsum
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      1 secs ago
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
                      {fakerData[0].users[0].name} is typing
                      <span className="ml-1 typing-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-4 pb-10 border-t sm:py-4 border-slate-200/60 dark:border-darkmode-400">
                <FormTextarea
                  className="px-5 py-3 border-transparent shadow-none resize-none h-[46px] dark:bg-darkmode-600 focus:border-transparent focus:ring-0"
                  rows={1}
                  placeholder="Type your message..."
                ></FormTextarea>
                <div className="absolute bottom-0 left-0 flex mb-5 ml-5 sm:static sm:ml-0 sm:mb-0">
                  <Menu className="mr-3 sm:mr-5">
                    <Menu.Button
                      as="a"
                      href="#"
                      className="block w-4 h-4 sm:w-5 sm:h-5 text-slate-500"
                    >
                      <Lucide icon="Smile" className="w-full h-full" />
                    </Menu.Button>
                    <Menu.Items placement="top-end" className="w-[320px]">
                      <Tab.Group
                        className="flex flex-col h-[364px]"
                        selectedIndex={1}
                      >
                        <div className="px-1 pt-1">
                          <div className="relative text-slate-500">
                            <FormInput
                              type="text"
                              className="pr-10 border-transparent bg-slate-100"
                              placeholder="Search emojis..."
                            />
                            <Lucide
                              icon="Search"
                              className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                            />
                          </div>
                        </div>
                        <Tab.List variant="pills" className="px-1 mt-5">
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 496 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 352 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <Tab.Button
                                className={clsx([
                                  "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                                  selected &&
                                    "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300",
                                ])}
                                as="button"
                              >
                                <svg
                                  className="w-4 h-4 mx-auto"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"
                                  ></path>
                                </svg>
                              </Tab.Button>
                            )}
                          </Tab>
                        </Tab.List>
                      </Tab.Group>
                    </Menu.Items>
                  </Menu>
                </div>
                <a
                  href="#"
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
