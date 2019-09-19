import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
  // whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeFactory = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return { store, persistor };
};

const { store, persistor } = storeFactory();
export { store, persistor };
