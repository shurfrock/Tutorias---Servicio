import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Disclosure } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium"> INICIO </h2>
      </div>
      <div className="flex flex-col items-center px-5 pt-16 pb-24 intro-y box mt-7">
        {/* BEGIN: Invoice Title */}
        <div className="text-center">
          <div className="mt-5 text-4xl font-bold">
            Bienvenido a Tutorias
          </div>
          <div className="mt-3 text-base text-slate-500">
          Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)
          </div>
        </div>
        <Disclosure.Group variant="boxed" className="mt-16 md:w-5/6">
          <Disclosure>
            <Disclosure.Button>
              Mas que un tutor un Amigo
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
              En nuestro mundo acelerado, el aprendizaje es más que adquirir conocimientos: 
              es un viaje emocionante hacia la realización personal y el crecimiento continuo. 
              En la Universidad de Guadalajara, nos enorgullece ser tu compañero en este emocionante viaje educativo. 
              Imagina un lugar donde la curiosidad es recompensada, donde cada pregunta es una oportunidad para explorar y aprender algo nuevo. 
              Ese lugar es aquí, donde los maestros inspiradores se conectan con los alumnos apasionados para desbloquear su máximo potencial. 
              Nuestra plataforma es más que un lugar para encontrar tutorías; es un santuario de aprendizaje colaborativo. 
              Conectamos a estudiantes con maestros expertos que no solo transmiten conocimientos, 
              sino que también inspiran, motivan y guían a través de cada paso del camino.
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button>
              Nuestra Mision
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
            Nuestra misión es simple: convertir el aprendizaje en una aventura emocionante y empoderadora para todos. 
            Con herramientas intuitivas y recursos de vanguardia, hace que el proceso de encontrar tutorías y conectar con 
            maestros sea fácil y sin complicaciones.
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
      </div>
    </>
  );
}

export default Main;
