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
  gst: {
    name: "",
    address: "",
    gst_tin_no: "",
    invoice_no: "",
    date: "",
    state_code: "",
    venue: "",
    event_date: "",
    items: [],
    amount: "",
    autoCalculate: true,
    gst_percentage: 18,
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
    updateGstField: (state, action) => {
      state.gst[action.payload.field] = action.payload.value;
    },
    updateGstItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.gst.items[index][field] = value;
    },
    addGstItem: (state) => {
      state.gst.items.push({
        description: "",
        hsn: "",
        qty: "",
        rate: "",
        amount: "",
      });
    },
    removeGstItem: (state, action) => {
      state.gst.items.splice(action.payload, 1);
    },
  },
});

export const {
  updateNongstField,
  updateNongstItem,
  addNongstItem,
  removeNongstItem,
  updateGstField,
  updateGstItem,
  addGstItem,
  removeGstItem,
} = billSlice.actions;
export default billSlice.reducer;
