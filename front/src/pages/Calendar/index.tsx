import "@fullcalendar/react/dist/vdom";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Calendar from "../../components/Calendar";
import { Draggable as FullCalendarDraggable } from "../../base-components/Calendar";
import { Draggable } from "@fullcalendar/interaction";
import { FormTextarea, FormInput, FormLabel } from "../../base-components/Form";

function Main() {
  const dragableOptions: Draggable["settings"] = {
    itemSelector: ".event",
    eventData(eventEl) {
      const getDays = () => {
        const days = eventEl.querySelectorAll(".event__days")[0]?.textContent;
        return days ? days : "0";
      };
      return {
        title: eventEl.querySelectorAll(".event__title")[0]?.innerHTML,
        duration: {
          days: parseInt(getDays()),
        },
      };
    },
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Calendar</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Event Reports
          </Button>
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Calendar Side Menu */}
        <Tab.Group className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="p-2 box intro-y">
            <Tab.List variant="pills">
              <Tab>
                <Tab.Button className="w-full py-2" as="button">
                  Event List
                </Tab.Button>
              </Tab>
              <Tab>
                <Tab.Button className="w-full py-2" as="button">
                  Add New Event
                </Tab.Button>
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="mt-5 intro-y">
            <Tab.Panel>
              <FullCalendarDraggable
                id="calendar-events"
                options={dragableOptions}
                className="h-[820px] overflow-y-auto scrollbar-hidden"
              >
                <div className="p-5 mt-5 cursor-pointer event box first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                    <div className="font-medium truncate event__title">
                      VueJs Amsterdam
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 ml-auto text-slate-500"
                    />
                  </div>
                  <div className="py-5 my-5 border-t border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      02 February 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      <span className="mr-1 event__days">2</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <Button variant="outline-secondary" className="px-2 py-1">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="px-2 py-1 ml-auto"
                    >
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
                <div className="p-5 mt-5 cursor-pointer event box first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                    <div className="font-medium truncate event__title">
                      Vue Fes Japan 2022
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 ml-auto text-slate-500"
                    />
                  </div>
                  <div className="py-5 my-5 border-t border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      24 March 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      <span className="mr-1 event__days">3</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <Button variant="outline-secondary" className="px-2 py-1">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="px-2 py-1 ml-auto"
                    >
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
                <div className="p-5 mt-5 cursor-pointer event box first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 rounded-full bg-success"></div>
                    <div className="font-medium truncate event__title">
                      Laracon 2022
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 ml-auto text-slate-500"
                    />
                  </div>
                  <div className="py-5 my-5 border-t border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      24 March 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      <span className="mr-1 event__days">4</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <Button variant="outline-secondary" className="px-2 py-1">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="px-2 py-1 ml-auto"
                    >
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
                <div className="p-5 mt-5 cursor-pointer event box first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                    <div className="font-medium truncate event__title">
                      VueJs Japan
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 ml-auto text-slate-500"
                    />
                  </div>
                  <div className="py-5 my-5 border-t border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      10 December 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      <span className="mr-1 event__days">2</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2 text-slate-500"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <Button variant="outline-secondary" className="px-2 py-1">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="px-2 py-1 ml-auto"
                    >
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
              </FullCalendarDraggable>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-5 box">
                <div>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <FormInput
                    id="title"
                    type="text"
                    className="w-full"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <FormInput
                    id="date"
                    type="text"
                    className="w-full datepicker"
                    data-single-mode="true"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <FormInput
                    id="time"
                    type="text"
                    className="w-full"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <FormTextarea id="location" className="w-full"></FormTextarea>
                </div>
                <Button variant="primary" type="button" className="w-full mt-5">
                  Save
                </Button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="p-5 box">
            <Calendar />
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;
