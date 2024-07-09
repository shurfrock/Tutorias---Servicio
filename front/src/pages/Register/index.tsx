import logoUrl from "../../assets/images/logo.svg";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <img
              className="w-16 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
              Registrar una cuenta nueva
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Nombre"
              />
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Apellido"
              />
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Correo"
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-4"
                placeholder="Contraseña"
              />
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Confrimar Contraseña"
              />
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button variant="primary" className="w-full xl:mr-3">
                  Registarse
                </Button>
                <Button variant="outline-secondary" className="w-full mt-3">
                  Iniciar Sesion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
