import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import userSlice from "./user/userSlice";
// import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";

const persistConfig = {
    key: "shippr",
    version: 1.2,
    storage: AsyncStorage,
};

const reducer = combineReducers({
    // user: userSlice,
    // product: productSlice,
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    // .concat(logger),
    devTools: true,
});

export default store;
