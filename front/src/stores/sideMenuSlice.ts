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
    "MENU",
    {
      icon: "FileText",
      title: "Formulario",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/crud-data-list",
          title: "Formularios",
        },
        {
          icon: "Edit",
          pathname: "/crud-form",
          title: "Crear Formulario",
        },
      ],
    },
    {
      icon: "HardDrive",
      pathname: "/error-page",
      title: "Error Page",
    },
    "PERFIL",
    {
      icon: "Trello",
      pathname: "/profile",
      title: "Profile",
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
