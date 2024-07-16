import { createSlice } from "@reduxjs/toolkit";

export enum ThemeOptions {
  Dark = "dark",
  Light = "light",
}

export interface ThemeState {
  theme: ThemeOptions;
}

const initialState: ThemeState = {
  theme: ThemeOptions.Dark,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme === ThemeOptions.Light
          ? ThemeOptions.Dark
          : ThemeOptions.Light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
