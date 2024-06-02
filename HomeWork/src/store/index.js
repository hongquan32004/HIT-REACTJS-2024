import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import quarticequation from "./QuarticEquation";

export const store = configureStore({
    reducer: {
        counterReducer,
        equation: quarticequation
    }
});

