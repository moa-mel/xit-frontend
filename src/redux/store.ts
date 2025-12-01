import { configureStore } from "@reduxjs/toolkit"
import xitReducer from "@/redux/api/apiSlice";


const store = configureStore({
    reducer: {
        xit: xitReducer,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch']

export default store
