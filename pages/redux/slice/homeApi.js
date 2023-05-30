// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
// export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
//   const response = await fetch("https://api.football-data.org/v4/competitions/2001/matches?status=FINISHED",

//     {
//       headers: {
//         'X-Auth-Token': "7ead1931c28745ca86a312cbb8bbf328",
//         'Content-Type': 'application/json'
//     },
//     }
//     );
//     return await response.json();
//   });

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: {
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchTodos.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchTodos.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchTodos.rejected, (state, action) => {
//       console.log("Error", action.payload);
//       state.isError = true;
//     });
//   },

// });
// export const fetchNextMatch = createAsyncThunk("fetchNextMatch", async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return response.json();
//   });

// const nextMatch = createSlice({
//   name: "nextMatche",
//   initialState: {
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchNextMatch.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchNextMatch.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchNextMatch.rejected, (state, action) => {
//       console.log("Error", action.payload);
//       state.isError = true;
//     });
//   },

// });

// export default todoSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/2001/matches?status=FINISHED",
    {
      headers: {
        'X-Auth-Token': "7ead1931c28745ca86a312cbb8bbf328",
      },
    }
  );
  return await response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const fetchNextMatch = createAsyncThunk("fetchNextMatch", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return response.json();
// });

// const nextMatch = createSlice({
//   name: "nextMatche",
//   initialState: {
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchNextMatch.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchNextMatch.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchNextMatch.rejected, (state, action) => {
//       console.log("Error", action.payload);
//       state.isError = true;
//     });
//   },
// });

// const res = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);

// export const fetchNews = createAsyncThunk("fetchTodos", async () => {
//     const API_KEY = "b9737ad8-3550-4d05-a3cc-c30ca91ad08f";
//     const response = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);
//     return await response.json();
//   });
  
//   const newsPost = createSlice({
//     name: "newsPost",
//     initialState: {
//       isLoading: false,
//       data: null,
//       isError: false,
//     },
//     extraReducers: (builder) => {
//       builder.addCase(fetchNews.pending, (state, action) => {
//         state.isLoading = true;
//       });
//       builder.addCase(fetchNews.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       });
//       builder.addCase(fetchNews.rejected, (state, action) => {
//         console.log("Error", action.payload);
//         state.isError = true;
//       });
//     },
//   });
export default todoSlice.reducer;


