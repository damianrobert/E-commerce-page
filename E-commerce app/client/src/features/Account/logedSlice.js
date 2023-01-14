import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  firstName: "",
  lastName: "",
  isLoading: true,
};

const logedSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getDetails: (state) => {
      state.firstName;
    },
  },
});

export const { getDeatils } = logedSlice.actions;

export default logedSlice.reducer;
