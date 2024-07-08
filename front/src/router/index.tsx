import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import DashboardOverview1 from "../pages/DashboardOverview1";
import DashboardOverview2 from "../pages/DashboardOverview2";
import Calendar from "../pages/Calendar";
import Chat from "../pages/Chat";
import Inbox from "../pages/Inbox";
import EmailDetail from "../pages/EmailDetail";
import Compose from "../pages/Compose";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";
import FileManager from "../pages/FileManager";
import Profile from "../pages/Profile";
import Pricing from "../pages/Pricing";
import Invoice from "../pages/Invoice";
import Faq from "../pages/Faq";
import Timeline from "../pages/Timeline";
import CrudDataList from "../pages/CrudDataList";
import CrudForm from "../pages/CrudForm";
import WizardLayout1 from "../pages/WizardLayout1";
import WizardLayout2 from "../pages/WizardLayout2";
import WizardLayout3 from "../pages/WizardLayout3";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import RegularTable from "../pages/RegularTable";
import Tabulator from "../pages/Tabulator";
import Modal from "../pages/Modal";
import Slideover from "../pages/Slideover";
import Notification from "../pages/Notification";
import Tab from "../pages/Tab";
import Accordion from "../pages/Accordion";
import Button from "../pages/Button";
import Alert from "../pages/Alert";
import ProgressBar from "../pages/ProgressBar";
import Tooltip from "../pages/Tooltip";
import Dropdown from "../pages/Dropdown";
import Typography from "../pages/Typography";
import Icon from "../pages/Icon";
import LoadingIcon from "../pages/LoadingIcon";
import RegularForm from "../pages/RegularForm";
import Datepicker from "../pages/Datepicker";
import TomSelect from "../pages/TomSelect";
import FileUpload from "../pages/FileUpload";
import WysiwygEditor from "../pages/WysiwygEditor";
import Validation from "../pages/Validation";
import Chart from "../pages/Chart";
import Slider from "../pages/Slider";
import ImageZoom from "../pages/ImageZoom";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        {
          path: "/dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "/email-detail",
          element: <EmailDetail />,
        },
        {
          path: "/compose",
          element: <Compose />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product-detail",
          element: <ProductDetail />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/order-detail",
          element: <OrderDetail />,
        },
        {
          path: "/file-manager",
          element: <FileManager />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/invoice",
          element: <Invoice />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/timeline",
          element: <Timeline />,
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
          path: "/wizard-layout-1",
          element: <WizardLayout1 />,
        },
        {
          path: "/wizard-layout-2",
          element: <WizardLayout2 />,
        },
        {
          path: "/wizard-layout-3",
          element: <WizardLayout3 />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
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
