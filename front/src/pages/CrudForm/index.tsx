import { ClassicEditor } from "../../base-components/Ckeditor";
import TomSelect from "../../base-components/TomSelect";
import Lucide from "../../base-components/Lucide";
import { useState, useRef } from "react";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSwitch,
  FormCheck,
  FormSelect,
} from "../../base-components/Form";
import { useNavigate } from "react-router-dom";
import { Menu, Dialog } from "../../base-components/Headless";
import axios from "axios";


function Main() {
  const [categories, setCategories] = useState(["1"]);
  const [formTitle, setFormTitle] = useState(""); 
  const [isActive, setIsActive] = useState(false); 
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

  const [questions, setQuestions] = useState([{ type: 'Pregunta Abierta', options: [''] }]);

  const addQuestion = () => {
    setQuestions([...questions, { type: 'Pregunta Abierta', options: [''] }]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSelectChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuestions = [...questions];
    newQuestions[index].type = event.target.value;
    setQuestions(newQuestions);
  };

  const addOption = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push('');
    setQuestions(newQuestions);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, i) => i !== optionIndex);
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex: number, optionIndex: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const [successModal, setSuccessModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const deleteButtonRef = useRef(null);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    const formData = {
      title: formTitle,
      description: editorData,
      categories,
      is_active: isActive,
      questions
    };

    // Aquí enviamos los datos usando Axios
    axios
      .post("http://localhost:8000/formularios", formData)
      .then((response) => {
        console.log("Formulario guardado con éxito:", response.data);
        setSuccessModal(true); // Abre el modal de éxito
      })
      .catch((error) => {
        console.error("Error al guardar el formulario:", error);
      });
  };


  return (
    <>
      <Dialog staticBackdrop open={deleteModal} onClose={()=> {
          setDeleteModal(false);
          }}
          initialFocus={deleteButtonRef}
          >
          <Dialog.Panel>
              <div className="p-5 text-center">
                  <Lucide icon="XCircle" className="w-16 h-16 mx-auto mt-3 text-danger" />
                  <div className="mt-5 text-3xl">¿Estas Seguro?</div>
                  <div className="mt-2 text-slate-500">
                      Se perdera los datos del Formulario
                  </div>
              </div>
              <div className="px-5 pb-8 text-center">
                  <Button type="button" variant="outline-secondary" onClick={()=> {
                      setDeleteModal(false);
                      }}
                      className="w-24 mr-1"
                      >
                      Cancelar
                  </Button>
                  <Button type="button" variant="danger" className="w-24"  onClick={navigateForms}>
                      Borrar
                  </Button>
              </div>
          </Dialog.Panel>
      </Dialog>
      <Dialog open={successModal} onClose={()=> {
          setSuccessModal(false);
          }}
          >
          <Dialog.Panel>
              <div className="p-5 text-center">
                  <Lucide icon="CheckCircle" className="w-16 h-16 mx-auto mt-3 text-success" />
                  <div className="mt-5 text-3xl">Excelente!</div>
                  <div className="mt-2 text-slate-500">
                      Se guardo correctamente!
                  </div>
              </div>
              <div className="px-5 pb-8 text-center">
                  <Button type="button" variant="success" onClick={()=> {
                      setSuccessModal(false);
                      }}
                      className="w-24"
                      >
                      Siguiente
                  </Button>
              </div>
          </Dialog.Panel>
      </Dialog>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium"> Creación de Formulario </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          <div className="flex justify-center items-center">
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
                  <option value="1">Todas las Carreras</option>
                  <option value="2">Ingenieria Biomedica</option>
                  <option value="3">Ingenieria Informatica</option>
                  <option value="4">Ingenieria Robotica</option>
                  <option value="5">Ingenieria </option>
                </TomSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="crud-form-2">Alumnos</FormLabel>
                <TomSelect
                  id="crud-form-2"
                  value={categories}
                  onChange={setCategories}
                  className="w-full"
                  multiple
                >
                  <option value="1">Todos los Alumnos</option>
                  <option value="2">Albeto Carlos Hernandez Hernandez</option>
                  <option value="3">Albeto Carlos Hernandez Hernandez</option>
                  <option value="4">Albeto Carlos Hernandez Hernandez</option>
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

              <div>
                {questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="mt-3">
                    <div className="flex items-center">
                      <div className="flex-1 mr-2">
                        <FormLabel htmlFor={`question-${questionIndex}`}>Pregunta</FormLabel>
                        <FormInput
                          id={`question-${questionIndex}`}
                          type="text"
                          className="w-full"
                          placeholder="Titulo de Pregunta"
                        />
                      </div>
                      <div className="flex items-center">
                        <FormSelect 
                          className="mt-2 sm:mr-2" 
                          aria-label="Default select example"
                          onChange={(e) => handleSelectChange(questionIndex, e)}
                          value={question.type}
                        >
                          <option>Pregunta Abierta</option>
                          <option>Casillas de Verificación</option>
                          <option>Opción Múltiple</option>
                        </FormSelect>
                        <Button 
                          variant="danger" 
                          className="ml-2"
                          onClick={() => removeQuestion(questionIndex)}
                        >
                          <Lucide icon="Trash" className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {question.type === 'Opción Múltiple' && (
                      <div className="mt-3">
                        <div className="flex justify-between items-center">
                          <label>Opción Múltiple</label>
                          <Button 
                            variant="outline-success" 
                            className="inline-block mb-2 mr-1"
                            onClick={() => addOption(questionIndex)}
                          >
                            <span className="flex items-center justify-center">
                              <Lucide icon="Plus" className="w-4 h-4" />
                            </span>
                          </Button>
                        </div>
                        {question.options.map((option, optionIndex) => (
                          <FormCheck className="mt-2 flex items-center" key={optionIndex}>
                            <FormCheck.Input
                              id={`checkbox-${questionIndex}-${optionIndex}`}
                              type="checkbox"
                              value=""
                              className="mr-2"
                            />
                            <FormInput
                              id={`option-multiple-${questionIndex}-${optionIndex}`}
                              type="text"
                              className="w-full mr-2"
                              placeholder="Agregar respuesta"
                              value={option}
                              onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                            />
                            <Button 
                              variant="danger" 
                              className="mb-2"
                              onClick={() => removeOption(questionIndex, optionIndex)}
                            >
                              <Lucide icon="Trash" className="w-3 h-3" />
                            </Button>
                          </FormCheck>
                        ))}
                      </div>
                    )}

                    {question.type === 'Casillas de Verificación' && (
                      <div className="mt-3">
                        <div className="flex justify-between items-center">
                          <label>Casillas de Verificación</label>
                          <Button 
                            variant="outline-success" 
                            className="inline-block mb-2 mr-1"
                            onClick={() => addOption(questionIndex)}
                          >
                            <span className="flex items-center justify-center">
                              <Lucide icon="Plus" className="w-4 h-4" />
                            </span>
                          </Button>
                        </div>
                        {question.options.map((option, optionIndex) => (
                          <FormCheck className="mt-2 flex items-center" key={optionIndex}>
                            <FormCheck.Input 
                              id={`radio-${questionIndex}-${optionIndex}`} 
                              type="radio" 
                              name={`radio-${questionIndex}`} 
                              value={`radio-${optionIndex}`} 
                              className="mr-2"
                            />
                            <FormInput
                              id={`option-checkbox-${questionIndex}-${optionIndex}`}
                              type="text"
                              className="w-full mr-2"
                              placeholder="Agregar respuesta"
                              value={option}
                              onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                            />
                            <Button 
                              variant="danger" 
                              className="mb-2"
                              onClick={() => removeOption(questionIndex, optionIndex)}
                            >
                              <Lucide icon="Trash" className="w-3 h-3" />
                            </Button>
                          </FormCheck>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Button 
                  variant="outline-success" 
                  className="mt-5 mr-2 shadow-md"
                  onClick={addQuestion}
                >
                  Agregar Pregunta
                </Button>
              </div>

              
              <div className="mt-5 text-right">
                <Button
                  type="button"
                  variant="outline-secondary"
                  className="w-24 mr-1"
                  onClick={(event: React.MouseEvent)=> {
                    event.preventDefault();
                    setDeleteModal(true);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  variant="success"
                  className="w-24"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    handleSubmit(event); // Pasa el evento al handleSubmit
                  }}
                >
                  Guardar
                </Button>
              </div>
            </div>
            {/* END: Form Layout */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
