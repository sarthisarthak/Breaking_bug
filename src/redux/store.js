import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check
    }),
});
export default store;
