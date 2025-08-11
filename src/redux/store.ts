import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error cargando estado desde localStorage", error);
    return undefined;
  }
}

function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error guardando estado en localStorage", error);
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(), // ← Se hidrata aquí
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  saveToLocalStorage({
    currentComponent: store.getState().currentComponent, // 🔹 Solo guardamos ese slice
  });
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
