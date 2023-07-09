import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  price: number;
  _id: any;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const calculateTotal = (
  items: CartItem[]
): { totalPrice: number; totalQuantity: number } => {
  let totalPrice = 0;
  let totalQuantity = 0;

  items.forEach((item) => {
    item.totalPrice = item.price * item.quantity;
    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  return { totalPrice, totalQuantity };
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = action.payload;
        newItem.totalPrice = newItem.price * newItem.quantity;
        state.items.push(newItem);
      }

      const { totalPrice, totalQuantity } = calculateTotal(state.items);
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);
      if (item) {
        item.quantity += 1;
        const { totalPrice, totalQuantity } = calculateTotal(state.items);
        state.totalPrice = totalPrice;
        state.totalQuantity = totalQuantity;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        const { totalPrice, totalQuantity } = calculateTotal(state.items);
        state.totalPrice = totalPrice;
        state.totalQuantity = totalQuantity;
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item: any) => item._id === itemId
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
