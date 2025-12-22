import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/api/apiSlice";
import xitReducer from "./slices/xitSlice";

const store = configureStore({
  reducer: {
    xit: xitReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
