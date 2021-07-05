import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import rootReducer from "./reducers/rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware,
    devTools: true
});

export default store;