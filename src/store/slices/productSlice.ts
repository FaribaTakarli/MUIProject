import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface productState {
  id: number;
  productName: string;
  price: number;
}

// Define the initial state using that type
const initialState =
  [{ id: 1, productName: "laptop1", price: 1200 },
  { id: 2, productName: "laptop2", price: 12000 },
  { id: 3, productName: "laptop3", price: 120000 }] as productState[]




export const productSlice = createSlice({
  name: ' produc',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      console.log(actions.payload);
      let len = state.push(actions.payload);
      console.log(len);
    },
    updateOneProduct: (state, actions) => {
      console.log('update');
      console.log('update', actions.payload);
      let index = state.findIndex(x => x.id == actions.payload.id);
      state[index] = actions.payload;
      console.log(state);
    }

  },
})


export const { addProduct, updateOneProduct } = productSlice.actions

export default productSlice.reducer