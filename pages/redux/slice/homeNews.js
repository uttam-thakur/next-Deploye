import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("fetchTodos", async () => {
    const API_KEY = "b9737ad8-3550-4d05-a3cc-c30ca91ad08f";
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);
    return await response.json();
  });
  
  const newsPost = createSlice({
    name: "newsPost",
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchNews.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchNews.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });
export default newsPost.reducer;
