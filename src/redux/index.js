import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./slices/formSlice";

const store = configureStore({
    reducer: {
        info: FormSlice.reducer
    }
})

export default store;