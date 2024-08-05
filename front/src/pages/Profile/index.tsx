import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import _ from "lodash";
import preview16Url from "../../assets/images/fakers/preview-16.jpg";
import preview12Url from "../../assets/images/fakers/profile-12.jpg";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="flex items-center mr-auto text-lg font-medium">
          Profile
        </h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Pencil" className="w-4 h-4 mr-2" /> Update Profile
          </Button>
          <Button variant="outline-secondary" className="shadow-md">
            <Lucide icon="Download" className="w-4 h-4 mr-2" /> View Profile
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Profile Cover */}
        <div className="col-span-12">
          <div className="px-3 pt-3 pb-5 box intro-y">
            <div className="image-fit h-80 before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/20 to-black before:rounded-md before:z-10">
              <img
                alt="Rocketman - HTML Admin Template"
                className="rounded-md md:object-[0px_-170px]"
                src={preview16Url}
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center 2xl:flex-row 2xl:text-left">
              <div className="z-20 -mt-20 2xl:-mt-10 2xl:ml-10">
                <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
                  <img
                    alt="Rocketman - HTML Admin Template"
                    src={preview12Url}
                  />
                </div>
              </div>
              <div className="2xl:ml-5">
                <h2 className="mt-5 text-2xl font-medium">
                  {fakerData[0].users[0].name}
                </h2>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                  <Lucide icon="Briefcase" className="w-4 h-4 mr-2" /> Frontend
                  Engineer at Left4code Express
                </div>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                  <Lucide icon="MapPin" className="w-4 h-4 mr-2" /> New York,
                  USA
                </div>
              </div>
              <div className="grid h-20 grid-cols-2 px-10 mx-auto mt-5 mb-6 border-dashed gap-y-2 md:gap-y-0 gap-x-5 2xl:border-l 2xl:border-r border-slate-200 2xl:mb-0">
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  johnnydepp@left4code.com
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Instagram" className="w-4 h-4 mr-2" />{" "}
                  @johnnydepp
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Johnny Depp
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Linkedin" className="w-4 h-4 mr-2" /> Johnny
                  Depp
                </div>
              </div>
              <div className="flex mt-5 2xl:mr-10">
                <Button variant="primary" className="w-32 mr-2">
                  <Lucide icon="UserPlus" className="w-4 h-4 mr-2" /> Following
                </Button>
                <Button variant="outline-secondary" className="w-32">
                  <Lucide icon="UserCheck" className="w-4 h-4 mr-2" /> Add
                  Friend
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Cover */}
        {/* BEGIN: Profile Content */}
        <div className="col-span-12 xl:col-span-8">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Profile</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="leading-relaxed">
              <p className="mt-5">{fakerData[0].news[0].content}</p>
              <p className="mt-5">{fakerData[0].news[1].content}</p>
              <Button
                variant="outline-secondary"
                className="flex w-full mt-5 border-slate-200/60"
              >
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
              </Button>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Experience</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                    SU
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium">Left4code Express</div>
                  <div className="mt-1 text-slate-500">
                    Senior Frontend Engineer
                  </div>
                  <div className="mt-1">2005 - 2009 • 4 yrs</div>
                  <ul className="mt-5 -ml-16 list-disc sm:mt-3 sm:ml-3">
                    <li className="mb-1 last:mb-0">
                      Work across the full stack, building highly scalable
                      distributed solutions that enable positive user
                      experiences and measurable business growth.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Develop new features and infrastructure development in
                      support of rapidly emerging business and project
                      requirements.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Assume leadership of new projects from conceptualization
                      to deployment.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Ensure application performance, uptime, and scale,
                      maintaining high standards of code quality and thoughtful
                      application design.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Work with agile development methodologies, adhering to
                      best practices and pursuing continued learning
                      opportunities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                    UO
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium">Freelancer</div>
                  <div className="mt-1 text-slate-500">Fullstack Engineer</div>
                  <div className="mt-1">2010 - 2014 • 4 yrs</div>
                  <ul className="mt-5 -ml-16 list-disc sm:mt-3 sm:ml-3">
                    <li className="mb-1 last:mb-0">
                      Participate in all aspects of agile software development
                      including design, implementation, and deployment
                    </li>
                    <li className="mb-1 last:mb-0">
                      Architect and provide guidance on building end-to-end
                      systems optimized for speed and scale
                    </li>
                    <li className="mb-1 last:mb-0">
                      Work primarily in Ruby, Java/JRuby, React, and JavaScript
                    </li>
                    <li className="mb-1 last:mb-0">
                      Engage with inspiring designers and front end engineers,
                      and collaborate with leading back end engineers as we
                      create reliable APIs
                    </li>
                    <li className="mb-1 last:mb-0">
                      Collaborate across time zones via Slack, GitHub comments,
                      documents, and frequent video conferences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="flex w-full mt-5 border-slate-200/60"
            >
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
            </Button>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Skills</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="flex flex-wrap">
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Ruby
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Java/JRuby
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                React
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                JavaScript
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Typescript
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Bootstrap 5
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                TailwindCSS 3
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Vuejs
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Ruby
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Java/JRuby
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                React
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                JavaScript
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Typescript
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Bootstrap 5
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                TailwindCSS 3
              </div>
              <div className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10">
                Vuejs
              </div>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Interests</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  SV
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">Svelte</div>
                  <div className="mt-1 text-slate-500">4,468,655 followers</div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  AN
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">Angular</div>
                  <div className="mt-1 text-slate-500">1,468,655 followers</div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  TW
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">TailwindCSS</div>
                  <div className="mt-1 text-slate-500">
                    45,468,655 followers
                  </div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  LV
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">Laravel</div>
                  <div className="mt-1 text-slate-500">4,468,655 followers</div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  RT
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">React</div>
                  <div className="mt-1 text-slate-500">1,468,655 followers</div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  BS
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">Bootstrap</div>
                  <div className="mt-1 text-slate-500">
                    45,468,655 followers
                  </div>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="px-3 py-1 mt-2"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Content */}
        {/* BEGIN: Profile Side Menu */}
        <div className="col-span-12 xl:col-span-4">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Education</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  SU
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">
                    Stanford University
                  </div>
                  <div className="mt-1 text-slate-500">
                    Computer Science and Engineering
                  </div>
                  <div className="mt-1">2005 - 2009 • 4 yrs</div>
                  <div className="mt-1">California, USA</div>
                </div>
              </div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  UO
                </div>
                <div className="ml-5">
                  <div className="text-base font-medium">
                    University of Oxford
                  </div>
                  <div className="mt-1 text-slate-500">
                    Computer Science and Engineering
                  </div>
                  <div className="mt-1">2010 - 2014 • 4 yrs</div>
                  <div className="mt-1">Oxford, England</div>
                </div>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="flex w-full mt-5 border-slate-200/60"
            >
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
            </Button>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Followers (102)
              </div>
            </div>
            <div>
              {_.take(fakerData, 5).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className="flex items-center pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0"
                >
                  <div>
                    <div className="w-16 h-16 image-fit">
                      <img
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.photos[0]}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full ml-5 2xl:items-center gap-y-3 2xl:flex-row">
                    <div className="mr-auto">
                      <div className="flex items-center text-base font-medium">
                        <div className="whitespace-nowrap">
                          {faker.users[0].name}
                        </div>
                        <div className="mx-1.5">•</div>
                        <a href="" className="text-xs text-success">
                          Follow
                        </a>
                      </div>
                      <div className="mt-1 text-slate-500">
                        {faker.users[0].username}
                      </div>
                    </div>
                    <div className="flex">
                      <Button variant="outline-secondary" className="px-2 py-1">
                        <Lucide icon="UserCheck" className="w-4 h-4 mr-2" />{" "}
                        Friends
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline-secondary"
              className="flex w-full mt-5 border-slate-200/60"
            >
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
            </Button>
          </div>
        </div>
        {/* END: Profile Side Menu */}
      </div>
    </>
  );
}

export default Main;
