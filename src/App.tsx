import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import MovieContext from "./context/MovieContext";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieContext>
                <Homepage />
              </MovieContext>
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <MovieContext>
                <Movie />
              </MovieContext>
            }
          />
          <Route
            path="/tv/:showId"
            element={
              <MovieContext>
                <Show />
              </MovieContext>
            }
          />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
