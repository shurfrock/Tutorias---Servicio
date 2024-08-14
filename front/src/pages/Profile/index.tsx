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
          Perfil
        </h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="Pencil" className="w-4 h-4 mr-2" /> Editar Perfil
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
                  Nombre completo de Usuario
                </h2>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                  <Lucide icon="Briefcase" className="w-4 h-4 mr-2" /> Carrera / Tipo de usuario
                </div>
              </div>
              <div className="grid h-20 grid-cols-2 px-10 mx-auto mt-5 mb-6 border-dashed gap-y-2 md:gap-y-0 gap-x-5 2xl:border-l border-slate-200 2xl:mb-0">
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                    Correo Institucional
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Cover */}
        {/* BEGIN: Profile Content */}
        <div className="col-span-12">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate"> Perfil de Usuario</div>
            </div>
            <div className="leading-relaxed">
              <p className="mt-5">{fakerData[0].news[0].content}</p>
              <p className="mt-5">{fakerData[0].news[1].content}</p>
            </div>
          </div>
        </div>
        {/* END: Profile Content */}
      </div>
    </>
  );
}

export default Main;
