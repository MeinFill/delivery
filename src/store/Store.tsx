import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./CartSlice"
import { saveState } from "./Storage"
import { userSlice } from "./UserSlice"

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
})

store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, "userData")
  saveState(store.getState().cart, "CartData")
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
