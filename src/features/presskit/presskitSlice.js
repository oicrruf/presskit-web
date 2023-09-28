import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import presskitService from './presskitService'

const initialState = {
  presskit: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}

export const getPresskit = createAsyncThunk('presskit/get', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await presskitService.getPresskit(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const crearPresskit = createAsyncThunk('presskit/crear', async (presskitData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await presskitService.crearPresskit(presskitData, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// eliminar una tarea
export const deletePresskit = createAsyncThunk('presskit/eliminar', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await presskitService.deletePresskit(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const presskitSlice = createSlice({
  name: 'presskit',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(crearPresskit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(crearPresskit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.presskit = action.payload
      })
      .addCase(crearPresskit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPresskit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPresskit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.presskit = action.payload
      })
      .addCase(getPresskit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePresskit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePresskit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.presskit = {}
      })
      .addCase(deletePresskit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = presskitSlice.actions
export default presskitSlice.reducer
