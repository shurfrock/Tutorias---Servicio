import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Profile from "../pages/Profile";
import Invoice from "../pages/Invoice";
import CrudDataList from "../pages/CrudDataList";
import CrudForm from "../pages/CrudForm";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Students from "../pages/Students";
import MenuHome from "../pages/MenuHome";
import ChatBot from "../pages/ChatBot";
import AnswersStudents from "../pages/AnswersStudents";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/invoice",
          element: <Invoice />,
        },
        {
          path: "/crud-data-list",
          element: <CrudDataList />,
        },
        {
          path: "/crud-form",
          element: <CrudForm />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/menuHome",
          element: <MenuHome />,
        },
        {
          path: "/chatBot",
          element: <ChatBot />,
        },
        {
          path: "/answersStudents",
          element: <AnswersStudents />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
