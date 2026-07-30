// Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
// No movies found for your request.
// Ця перевірка виконується в App при обробці HTTP-запиту. Для сповіщень використовуйте бібліотеку React Hot Toast.
// При кожному новому пошуку колекція фільмів з попереднього пошуку повинна очищати

import { Toaster } from "react-hot-toast";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import { MovieGallery } from "../";
import { fetchMovies } from "../api/movies-api";
import type { Movie } from "../types/movie";

export default function App() {
  return (
    <>
      <Toaster />
    </>
  );
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function handleSearch(query: string) {
    const data = await fetchMovies(query);

    setMovies(data.results);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <MovieGallery movies={movies} />
    </>
  );
}
