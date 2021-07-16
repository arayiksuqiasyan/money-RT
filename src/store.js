import { configureStore } from "@reduxjs/toolkit";
import mony from "./monyReducer/monyReducer";

export default configureStore({
  reducer: {
    mony: mony,
  },
});
