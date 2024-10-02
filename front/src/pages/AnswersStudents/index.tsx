import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Dialog } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const navigateAnsweredForm = () => {
    navigate("/");
  };

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Respuesta de formulario de Alumnos</h2>
      <div className="grid grid-cols-12 gap-4 mt-2">
        <div className="mt-5">
            <Button
                variant="secondary"
                rounded
                className="mr-2"
                onClick={() => navigate(-1)}
            >
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
                Volver
            </Button>
        </div>
        {/* BEGIN: Data List */}
        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  FOTO
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  NOMBRE
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  RESPUESTA
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  CODIGO
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ESTATUS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {_.take(fakerData, 9).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="intro-x">
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div className="flex">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <Tippy
                          as="img"
                          alt="Rocketman Tailwind HTML Admin Template"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker.images[0]}
                        />
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a href="" className="font-medium whitespace-nowrap">
                      Nombre
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      Correo
                    </div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      <Button variant="secondary" className="mr-2 shadow-md">
                        Ver Formulario
                      </Button>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    Codigo 9 numeros
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div
                      className={clsx({
                        "flex items-center justify-center": true,
                        "text-success": faker.trueFalse[0],
                        "text-danger": !faker.trueFalse[0],
                      })}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {faker.trueFalse[0] ? "CONTESTADO" : "POR RESPONDER"}
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
        {/* END: Data List */}
      </div>
    </>
  );
}

export default Main;