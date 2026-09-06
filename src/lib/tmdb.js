const TMDB_BASE_URL = "https://api.themoviedb.org/3";

//Movies//
export async function getPopularMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return response.json();
}
//////////////////////////////////////////////////////////////
//TvShows
export async function getPopularTvShows() {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular TV shows");
  }

  return response.json();
}

export async function getTvShowDetails(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show details");
  }

  return response.json();
}
///////////////////////////////////////////////////
//Trending
export async function getTrendingMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
}
/////////////////////////////////////////////////////////
//TopRated
export async function getTopRatedMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}
//////////////////////////////////////////////////////////////
//Search
export async function searchMovies(query) {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  return response.json();
}
