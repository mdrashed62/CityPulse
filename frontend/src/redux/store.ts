import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import busReducer from "./features/bus/busSlice";
import snackbarReducer from "./features/snackbar/snackbarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bus: busReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

