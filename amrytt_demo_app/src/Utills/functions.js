export const updateVendorName = (
  vendorList,
  setVendorList,
  vendorIndex,
  val
) => {
  let newVendorList = [...vendorList];
  newVendorList[vendorIndex].vendorName = val;
  setVendorList(newVendorList);
};

export const updateVendorIsMain = (vendorList, setVendorList, vendorIndex) => {
  let oldVendorList = [...vendorList];
  let newVendorList = oldVendorList.map((value, index) => {
    if (vendorIndex === index) {
      return { ...value, isMain: true };
    } else return { ...value, isMain: false };
  });
  setVendorList(newVendorList);
};

export const addNewVendor = (vendorList, setVendorList) => {
  let newVendorList = [...vendorList];
  newVendorList.push({
    vendorName: "",
    isMain: false,
    varientList: [{ varientName: "", variantNumber: "" }],
  });
  setVendorList(newVendorList);
};

export const deleteVendor = (vendorList, setVendorList, vendorIndex) => {
  let oldVendorList = [...vendorList];
  oldVendorList.splice(vendorIndex, 1);
  setVendorList(oldVendorList);
};

export const updateVarientName = (
  vendorList,
  setVendorList,
  vendorIndex,
  varientIndex,
  val
) => {
  let newVendorList = [...vendorList];
  newVendorList[vendorIndex].varientList[varientIndex].varientName = val;
  setVendorList(newVendorList);
};

export const updateVarientNumber = (
  vendorList,
  setVendorList,
  vendorIndex,
  varientIndex,
  val
) => {
  let newVendorList = [...vendorList];
  newVendorList[vendorIndex].varientList[varientIndex].variantNumber = val;
  setVendorList(newVendorList);
};

export const addNewVarient = (vendorList, setVendorList, vendorIndex) => {
  let newVendorList = [...vendorList];
  newVendorList[vendorIndex].varientList.push({
    varientName: "",
    variantNumber: "",
  });
  setVendorList(newVendorList);
};

export const deleteVarient = (
  vendorList,
  setVendorList,
  vendorIndex,
  varientIndex
) => {
  let newVendorList = [...vendorList];
  newVendorList[vendorIndex].varientList.splice(varientIndex, 1);
  setVendorList(newVendorList);
};
