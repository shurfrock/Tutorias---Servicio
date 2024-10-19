import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { Menu, Dialog } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void }) {
  const [searchResultModal, setSearchResultModal] = useState(false);

  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // On press event (Ctrl+k)
  document.querySelectorAll("body")[0].onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  };

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateProfile = () => {
    navigate("/profile");
  };

  const pageNames: { [key: string]: string } = {
    '/menuHome': 'Inicio',
    '/crud-data-list': 'Formularios',
    '/crud-form': 'Creacion de Formularios',
    '/students': 'Alumnos',
    '/profile': 'Perfil',
    '/answersStudents': 'Respuestas de Alumnos',
  };

  const location = useLocation();
  
  // Obtiene el nombre de la página según la ruta actual
  const pageName = pageNames[location.pathname] || 'Página Desconocida';

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="h-[63px] z-[51] flex items-center relative xl:px-5">
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb light className="hidden -intro-x xl:flex">
          <Breadcrumb.Link to="/menuHome"> Tutorias </Breadcrumb.Link>
          <Breadcrumb.Link to={location.pathname} active={true}>{pageName}</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 text-white transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="relative ml-auto intro-x sm:mx-auto">
          <a className="relative text-white/70 sm:hidden" href="">
            <Lucide
              icon="Search"
              className="w-5 h-5 mr-5 dark:text-slate-500"
            />
          </a>
        </div>
        {/* END: Search */}
        {/* BEGIN: Search Result */}
        <Dialog
          size="lg"
          open={searchResultModal}
          onClose={() => {
            setSearchResultModal(false);
          }}
          className="flex items-center justify-center"
        >
        </Dialog>
        {/* BEGIN: Account Menu */}
        <Menu className="h-10 intro-x">
          <Menu.Button className="flex items-center h-full dropdown-toggle">
            <div className="w-10 h-10 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="border-2 border-white rounded-full shadow-lg border-opacity-10"
                src={fakerData[9].photos[0]}
              />
            </div>
            <div className="hidden ml-3 md:block text-slate-200">
              <div className="max-w-[7rem] truncate font-medium">
                Nombre de Usuario
              </div>
              <div className="text-xs text-slate-400">
                {fakerData[0]["jobs"][0]}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="w-56 mt-px">
            <Menu.Item onClick={navigateProfile}>
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Perfil
            </Menu.Item>
            <Menu.Item>
              <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Ayuda...
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={navigateLogin}>
              <Lucide icon="ToggleRight" className="w-4 h-4 mr-2"/> Salir de Sesión
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;