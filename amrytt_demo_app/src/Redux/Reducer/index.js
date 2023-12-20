import { combineReducers } from "redux";
import { FormReducer } from "./FormReducer";
import { ModalReducer } from "./ModalReducer";

export const setSessionDestroy = () => {
  return {
    type: "setSessionDestroy",
  };
};

const rootReducer = (state, action) => {
  if (action.type === "setSessionDestroy") {
    localStorage.clear();
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  ModalReducer: ModalReducer,
  FormReducer: FormReducer,
});

export default rootReducer;
