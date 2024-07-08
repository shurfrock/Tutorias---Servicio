import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "Home",
      title: "Dashboard",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Overview 1",
        },
        {
          icon: "Activity",
          pathname: "/dashboard-overview-2",
          title: "Overview 2",
        },
      ],
    },
    {
      icon: "Calendar",
      pathname: "/calendar",
      title: "Calendar",
    },
    {
      icon: "MessageSquare",
      pathname: "/chat",
      title: "Chat",
    },
    {
      icon: "Inbox",
      title: "Email",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/inbox",
          title: "Inbox",
        },
        {
          icon: "Activity",
          pathname: "/email-detail",
          title: "Email Detail",
        },
        {
          icon: "Activity",
          pathname: "/compose",
          title: "Compose",
        },
      ],
    },
    {
      icon: "CreditCard",
      title: "E-commerce",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/products",
          title: "Products",
        },
        {
          icon: "Activity",
          pathname: "/product-detail",
          title: "Product Detail",
        },
        {
          icon: "Activity",
          pathname: "/orders",
          title: "Orders",
        },
        {
          icon: "Activity",
          pathname: "/order-detail",
          title: "Order Detail",
        },
      ],
    },
    {
      icon: "HardDrive",
      pathname: "/file-manager",
      title: "File Manager",
    },
    "PAGES",
    {
      icon: "Trello",
      pathname: "/profile",
      title: "Profile",
    },
    {
      icon: "ShoppingBag",
      pathname: "/pricing",
      title: "Pricing",
    },
    {
      icon: "Files",
      pathname: "/invoice",
      title: "Invoice",
    },
    {
      icon: "FileCheck2",
      pathname: "/faq",
      title: "FAQ",
    },
    {
      icon: "ClipboardCheck",
      pathname: "/timeline",
      title: "Timeline",
    },
    {
      icon: "Edit",
      title: "Crud",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/crud-data-list",
          title: "Data List",
        },
        {
          icon: "Activity",
          pathname: "/crud-form",
          title: "Form",
        },
      ],
    },
    {
      icon: "FileText",
      title: "Wizards",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/wizard-layout-1",
          title: "Layout 1",
        },
        {
          icon: "Activity",
          pathname: "/wizard-layout-2",
          title: "Layout 2",
        },
        {
          icon: "Activity",
          pathname: "/wizard-layout-3",
          title: "Layout 3",
        },
      ],
    },
    {
      icon: "Unlock",
      pathname: "/login",
      title: "Login",
    },
    {
      icon: "Inbox",
      pathname: "/register",
      title: "Register",
    },
    {
      icon: "HardDrive",
      pathname: "/error-page",
      title: "Error Page",
    },
    "USER INTERFACE",
    {
      icon: "Inbox",
      title: "Components",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/table",
          title: "Table",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/regular-table",
              title: "Regular Table",
            },
            {
              icon: "Zap",
              pathname: "/tabulator",
              title: "Tabulator",
            },
          ],
        },
        {
          icon: "Activity",
          title: "Overlay",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/modal",
              title: "Modal",
            },
            {
              icon: "Zap",
              pathname: "/slideover",
              title: "Slide Over",
            },
            {
              icon: "Zap",
              pathname: "/notification",
              title: "Notification",
            },
          ],
        },
        {
          icon: "Activity",
          pathname: "/tab",
          title: "Tab",
        },
        {
          icon: "Activity",
          pathname: "/accordion",
          title: "Accordion",
        },
        {
          icon: "Activity",
          pathname: "/button",
          title: "Button",
        },
        {
          icon: "Activity",
          pathname: "/alert",
          title: "Alert",
        },
        {
          icon: "Activity",
          pathname: "/progress-bar",
          title: "Progress Bar",
        },
        {
          icon: "Activity",
          pathname: "/tooltip",
          title: "Tooltip",
        },
        {
          icon: "Activity",
          pathname: "/dropdown",
          title: "Dropdown",
        },
        {
          icon: "Activity",
          pathname: "/typography",
          title: "Typography",
        },
        {
          icon: "Activity",
          pathname: "/icon",
          title: "Icon",
        },
        {
          icon: "Activity",
          pathname: "/loading-icon",
          title: "Loading Icon",
        },
      ],
    },
    {
      icon: "Sidebar",
      title: "Forms",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/regular-form",
          title: "Regular Form",
        },
        {
          icon: "Activity",
          pathname: "/datepicker",
          title: "Datepicker",
        },
        {
          icon: "Activity",
          pathname: "/tom-select",
          title: "Tom Select",
        },
        {
          icon: "Activity",
          pathname: "/file-upload",
          title: "File Upload",
        },
        {
          icon: "Activity",
          pathname: "/wysiwyg-editor",
          title: "Wysiwyg Editor",
        },
        {
          icon: "Activity",
          pathname: "/validation",
          title: "Validation",
        },
      ],
    },
    {
      icon: "HardDrive",
      title: "Widgets",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/chart",
          title: "Chart",
        },
        {
          icon: "Activity",
          pathname: "/slider",
          title: "Slider",
        },
        {
          icon: "Activity",
          pathname: "/image-zoom",
          title: "Image Zoom",
        },
      ],
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
