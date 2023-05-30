import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchNextMatch = createAsyncThunk("fetchNextMatch", async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // return response.json();

    const API_KEY = "b9737ad8-3550-4d05-a3cc-c30ca91ad08f";
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);
    return await response.json();
  });

const nextMatch = createSlice({
  name: "nextMatche",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNextMatch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNextMatch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchNextMatch.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },

});

export default nextMatch.reducer;