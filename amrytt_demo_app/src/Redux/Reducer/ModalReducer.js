const initialState = {
  NewForm: {
    visible: false,
  },
  EditForm: {
    visible: false,
    index: null,
  },
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setOpenNewForm":
      return { ...state, NewForm: action.payload };
    case "setOpenEditForm":
      return { ...state, EditForm: action.payload };
    default:
      return state;
  }
};
