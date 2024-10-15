import logoUrl from "../../assets/images/logo.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormLabel, InputGroup, FormCheck } from "../../base-components/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";

function Main() {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };


  const navigateLogin= () => {
    navigate("/menuHome");
  };

  const schema = yup
  .object({
    name: yup.string().required().min(10),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await trigger();
  }; 

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <img
              className="w-28 mx-auto"
              alt="Logo"
              src={logoUrl}
            />
            <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
              Iniciar Sesion
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              
              <FormLabel
                  htmlFor="validation-form-2"
                  className="flex flex-col w-full sm:flex-row mt-3"
                >
                  Correo
              </FormLabel>
              <InputGroup>
                <InputGroup.Text id="input-group-email">
                  @
                </InputGroup.Text>
                <FormInput
                  {...register("email")}
                  id="validation-form-2"
                  type="email"
                  name="email"
                  className={clsx({
                    "border-danger mt-3": errors.email,
                  })}
                  placeholder="Correo Intitucional"
                />
              </InputGroup>
              {errors.email && (
                <div className="mt-2 text-danger">
                  {typeof errors.email.message === "string" &&
                    errors.email.message}
                </div>
              )}
              <FormLabel
                htmlFor="validation-form-3"
                className="flex flex-col w-full sm:flex-row mt-3"
              >
                Contraseña
              </FormLabel>
              <FormInput
                {...register("password")}
                id="validation-form-3"
                type="password"
                name="password"
                className={clsx({
                  "border-danger": errors.password,
                })}
                placeholder="Contraseña"
              />
              {errors.password && (
                <div className="mt-2 text-danger">
                  {typeof errors.password.message === "string" &&
                    errors.password.message}
                </div>
              )}
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button variant="primary" className="w-full xl:mr-3" onClick={navigateLogin}>
                  Iniciar Sesión
                </Button>
                <Button variant="outline-secondary" className="w-full mt-3" onClick={navigateRegister}>
                  Registrarse
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
