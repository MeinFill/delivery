import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { loadState } from "./Storage"

export interface CartItem {
  id: number
  count: number
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = loadState<CartState>("CartData") ?? {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload)
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 })
      } else {
        state.items.map((i) => {
          if (i.id === action.payload) {
            i.count += 1
          } else {
            return i
          }
        })
      }
    },
    subtractItem: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload)
      if (existed && existed.count < 2) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      } else {
        state.items.map((i) => {
          if (i.id === action.payload) {
            i.count -= 1
          } else {
            return i
          }
        })
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const cartActions = cartSlice.actions
