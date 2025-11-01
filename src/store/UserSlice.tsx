import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { loadState } from "./Storage"
import type { RootState } from "./Store"

export interface UserPersistentState {
  jwt: string | null
}

export interface UserState {
  jwt: string | null
  loginStateError?: string
  name?: string
  email?: string
  userDataError?: string
}

export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post(`https://purpleschool.ru/pizza-api-demo/auth/login`, {
        email: params.email,
        password: params.password,
      })
      return data
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message)
      }
    }
  }
)

export const registration = createAsyncThunk(
  "user/registration",
  async (params: { email: string; name: string; password: string }) => {
    try {
      const { data } = await axios.post(`https://purpleschool.ru/pizza-api-demo/auth/register`, {
        email: params.email,
        name: params.name,
        password: params.password,
      })
      return data
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message)
      }
    }
  }
)

export const userData = createAsyncThunk("user/login/name", async (_, { getState }) => {
  const state = getState() as RootState
  const jwt = state.user.jwt

  console.log({ jwt, state })

  try {
    const { data } = await axios.get(`https://purpleschool.ru/pizza-api-demo/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message)
    }
  }
})

const initialState: UserState = {
  jwt: loadState<UserPersistentState>("userData")?.jwt ?? null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null
      state.email = undefined
      state.name = undefined
    },
    reSubmit: (state) => {
      state.loginStateError = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) {
        return
      }
      state.jwt = action.payload.access_token
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loginStateError = action.error.message
    })
    builder.addCase(registration.fulfilled, (state, action) => {
      if (!action.payload) {
        return
      }
      state.jwt = action.payload.access_token
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.loginStateError = action.error.message
    })
    builder.addCase(userData.fulfilled, (state, action) => {
      if (!action.payload) {
        return
      }
      state.name = action.payload.name
      state.email = action.payload.email
    })
  },
})

export const userActions = userSlice.actions
