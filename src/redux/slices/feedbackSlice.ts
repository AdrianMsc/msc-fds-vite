import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createFeedback } from "../../api/feedback/createFeedback";
import { deleteFeedback } from "../../api/feedback/deleteFeedback";

export interface IFeedback {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  status?: string;
  read?: boolean;
}

const initialState: IFeedback[] = [];

// ADD ASYNC
export const addFeedback = createAsyncThunk(
  "feedback/addFeedback",
  async (data: IFeedback, { rejectWithValue }) => {
    try {
      const response = await createFeedback(data);
      if (response.status === 201) {
        const newFeedback = {
          id: response.data.data.id,
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: data.created_at,
          status: data.status,
          read: data.read,
        };
        return newFeedback;
      } else {
        return rejectWithValue("Failed to create feedback");
      }
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// REMOVE ASYNC
export const removeFeedback = createAsyncThunk(
  "feedback/removeFeedback",
  async (feedback: IFeedback, { rejectWithValue }) => {
    try {
      const response = await deleteFeedback(feedback);
      if (response.status === 200) {
        return feedback;
      } else {
        return rejectWithValue("Failed to delete feedback");
      }
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "feedbackReducer",
  initialState,
  reducers: {
    setFeedback: (_, action: PayloadAction<IFeedback[]>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ADD CASE
      .addCase(
        addFeedback.fulfilled,
        (state, action: PayloadAction<IFeedback>) => {
          return [...state, action.payload];
        }
      )
      .addCase(addFeedback.rejected, (_, action) => {
        console.error("Error adding feedback:", action.payload);
      })
      // REMOVE CASE
      .addCase(
        removeFeedback.fulfilled,
        (state, action: PayloadAction<IFeedback>) => {
          return state.filter((comp) => comp.id !== action.payload.id);
        }
      )
      .addCase(removeFeedback.rejected, (_, action) => {
        console.error("Error deleting feedback:", action.payload);
      });
  },
});

export const { setFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
