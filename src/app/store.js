import { configureStore } from "@reduxjs/toolkit";
import userSlices from "../store/slices/userSlices";

export default configureStore({
  reducer: {
    users: userSlices.reducer,
  },
});
