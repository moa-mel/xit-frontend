import { createSlice } from "@reduxjs/toolkit";

const xitSlice = createSlice({
  name: "xit",
  initialState: {
    xitId: null as string | null
  },
  reducers: {
    setXitId(state, action) {
      state.xitId = action.payload;
    },
    clearXitId(state) {
      state.xitId = null;
    }
  }
});

export const { setXitId, clearXitId } = xitSlice.actions;
export default xitSlice.reducer;
