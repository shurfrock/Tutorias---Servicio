import { ClassicEditor } from "../../base-components/Ckeditor";
import TomSelect from "../../base-components/TomSelect";
import { useState } from "react";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSwitch,
  InputGroup,
} from "../../base-components/Form";
import { useNavigate } from "react-router-dom";

function Main() {
  const [categories, setCategories] = useState(["1"]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p> Contenido a editar... </p>");

  const navigate = useNavigate();

  const navigateForms = () => {
    navigate("/crud-data-list");
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Form Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <div>
              <FormLabel htmlFor="crud-form-1">Titulo Formulario</FormLabel>
              <FormInput
                id="crud-form-1"
                type="text"
                className="w-full"
                placeholder="Titulo Formulario"
              />
            </div>
            <div className="mt-3">
              <label>Activar</label>
              <FormSwitch className="mt-2">
                <FormSwitch.Input type="checkbox" />
              </FormSwitch>
            </div>
            <div className="mt-3">
              <FormLabel htmlFor="crud-form-2">Carreras</FormLabel>
              <TomSelect
                id="crud-form-2"
                value={categories}
                onChange={setCategories}
                className="w-full"
                multiple
              >
                <option value="1">Ingenieria Biomedica</option>
                <option value="2">Ingenieria Informatica</option>
                <option value="3">Ingenieria Robotica</option>
                <option value="4">Ingenieria </option>
              </TomSelect>
            </div>
            <div className="mt-3">
              <label>Descripcion</label>
              <div className="mt-2">
                <ClassicEditor
                  value={editorData}
                  onChange={setEditorData}
                  config={editorConfig}
                />
              </div>
            </div>
            <Button 
              variant="outline-success" 
              className="mt-5 mr-2 shadow-md"
            >
              Agregar Pregunta
            </Button>
            
            <div className="mt-5 text-right">
              <Button
                type="button"
                variant="outline-secondary"
                className="w-24 mr-1"
                onClick={navigateForms}
              >
                Cancelar
              </Button>
              <Button type="button" variant="success" className="w-24">
                Guardar
              </Button>
            </div>
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;
