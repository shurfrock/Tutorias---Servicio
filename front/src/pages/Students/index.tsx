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
import { Menu, Slideover } from "../../base-components/Headless";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [asignConfirmationModal, setAsignConfirmationModal] = useState(false);

  const deleteButtonRef = useRef(null);
  const asignButtonRef = useRef(null);

  const [buttonSlideoverPreview, setButtonSlideoverPreview] = useState(false);

  const navigate = useNavigate();

  const navigateCreateForm = () => {
    navigate("/");
  };

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Alumnos</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="hidden mx-auto md:block text-slate-500">
            <div className="relative w-80 text-slate-500">
              <FormInput
                type="text"
                className="w-80 pr-10 !box"
                placeholder="Buscar Alumno..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div>
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
                  TUTOR
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  CODIGO
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ESTATUS
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ACCIONES
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
                      Nombre de Tutor
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
                      {faker.trueFalse[0] ? "Activo" : "Inactivo"}
                    </div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <a className="flex items-center mr-4" href="#">
                        <Lucide icon="CheckSquare" className="w-5 h-5 mr-2" />{" "}
                        Editar
                      </a>
                      <a
                        className="flex items-center text-danger mr-4"
                        href="#"
                        onClick={() => {
                          setDeleteConfirmationModal(true);
                        }}
                      >
                        <Lucide icon="Trash2" className="w-5 h-5 mr-2" /> Borrar
                      </a>
                      <a 
                        className="flex items-center" href="#" 
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setButtonSlideoverPreview(true);
                        }}
                      >
                        <Lucide icon="User" className="w-5 h-5 mr-2" />
                        Asignar Tutor
                      </a>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="w-20 mt-3 !box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false);
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 mx-auto mt-3 text-danger"
            />
            <div className="mt-5 text-3xl">¿Deseas Eliminarl a este alumno de tu tutorado?</div>
            <div className="mt-2 text-slate-500">
              ¿Deseas Borrar al alumno? <br />
              Se perdera la informacion del Alumno.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="w-24 mr-1"
            >
              Cancelar
            </Button>
            <Button
              variant="danger"
              type="button"
              className="w-24"
              ref={deleteButtonRef}
            >
              Borrar
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* END: Delete Confirmation Modal */}
      {/* BEGIN: Asign Confirmation Modal */}
      {/* BEGIN: Modal Content */}
        <Slideover
          size="xl"
          backdrop="static"
          open={buttonSlideoverPreview}
          onClose={() => {
            setButtonSlideoverPreview(false);
          }}
        >
          <Slideover.Panel>
            <a
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setButtonSlideoverPreview(false);
              }}
              className="absolute top-0 left-0 right-auto mt-4 -ml-12"
              href="#"
            >
              <Lucide icon="X" className="w-8 h-8 text-slate-400" />
            </a>
            <Slideover.Title className="p-5">
              <h2 className="mr-auto text-base font-medium">
                Asignar Tutor
              </h2>
            </Slideover.Title>
            <Slideover.Description>
              <h2 className="mt-3 text-3xl font-medium leading-none">
                Tutor Actual:
              </h2>
              <h3 className="mt-3 text-2xl font-medium leading-none">
                Nombre de Tutor
              </h3>
              <div className="overflow-x-auto mt-5">
                <Table striped>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="whitespace-nowrap">
                        Nombre
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        Correo
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        Codigo
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        Acciones
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                  {_.take(fakerData, 9).map((faker, fakerKey) => (
                    <Table.Tr>
                   
                      <Table.Td>Nombre Tutor</Table.Td>
                      <Table.Td>@Correo de Tutor</Table.Td>
                      <Table.Td> Codigo 9 numeros </Table.Td>
                      <Table.Td> 
                        <Button ref={deleteButtonRef} variant="success" className="mr-2" >
                          Asignar
                        </Button>  
                      </Table.Td>
                    </Table.Tr>
                  ))}
                  </Table.Tbody>
                </Table>
              </div>
            </Slideover.Description>
          </Slideover.Panel>
        </Slideover>
      {/* END: Modal Content */}
    </>
  );
}

export default Main;
