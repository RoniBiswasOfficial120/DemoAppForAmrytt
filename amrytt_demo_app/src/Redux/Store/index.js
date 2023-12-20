import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../Reducer";
import storage from 'redux-persist/lib/storage';
/*
--Redux Persist is in use.
--So while refreshing the screen or come back to the same component no need to call api once again.
*/
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
