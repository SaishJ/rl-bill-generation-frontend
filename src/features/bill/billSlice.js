import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nongst: {
    name: "",
    address: "",
    invoice_no: "",
    date: "",
    venue: "",
    items: [],
    total: "",
    extraAmount: "",
    autoCalculate: true,
  },
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    updateNongstField: (state, action) => {
      state.nongst[action.payload.field] = action.payload.value;
    },
    updateNongstItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.nongst.items[index][field] = value;
    },
    addNongstItem: (state) => {
      state.nongst.items.push({
        description: "",
        qty: "",
        rate: "",
        amount: "",
      });
    },
    removeNongstItem: (state, action) => {
      state.nongst.items.splice(action.payload, 1);
    },
  },
});

export const {
  updateNongstField,
  updateNongstItem,
  addNongstItem,
  removeNongstItem,
} = billSlice.actions;
export default billSlice.reducer;
