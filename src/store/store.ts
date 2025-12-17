import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import { loadRessources } from "./asyncCaller";
import currentReducer from "./current";

export const store = configureStore({
  reducer: { ressources: ressourcesReducer, current: currentReducer },
});
store.subscribe(() => console.log(store.getState()));
store.dispatch(loadRessources());

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
