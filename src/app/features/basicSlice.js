import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("khotamiTheme")) || "dark",
  openNav: false,
  openAside: false,
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("khotamiTheme", JSON.stringify(state.theme));
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    removeOpenNav(state) {
      state.openNav = false;
    },
    toggleOpenAside(state) {
      state.openAside = !state.openAside;
    },
    removeOpenAside(state) {
      state.openAside = false;
    },
  },
});

export const { toggleTheme, toggleOpenNav, removeOpenNav, toggleOpenAside, removeOpenAside } = basicSlice.actions;
export default basicSlice.reducer;
