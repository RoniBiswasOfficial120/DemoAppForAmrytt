export const setSessionDestroy = () => {
  return {
    type: "setSessionDestroy",
  };
};

export const setFormData = (val) => {
  return {
    type: "setFormData",
    payload: val,
  };
};
