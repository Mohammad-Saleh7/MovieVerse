const TMDB_BASE_URL = "https://api.themoviedb.org/3";

//Movies//
export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
}

export async function getNowPlayingMovies(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error("Failed to fetch now playing movies");
  return response.json();
}

export async function getUpcomingMovies(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`,
  );
  if (!response.ok) throw new Error("Failed to fetch upcoming movies");
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

export async function getMovieRecommendations(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie recommendations");
  }

  return response.json();
}

//Watch Trailer//
export async function getMovieVideos(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie videos");
  }

  return response.json();
}

//Cast//
export async function getMovieCredits(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }

  return response.json();
}
//////////////////////////////////////////////////////////////
//TvShows
export async function getPopularTvShows(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`,
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

export async function getTvShowRecommendations(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show recommendations");
  }

  return response.json();
}

export async function getTvShowVideos(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show videos");
  }

  return response.json();
}

export async function getTvShowCredits(id) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show credits");
  }

  return response.json();
}

export async function getTopRatedTvShows(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated TV shows");
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
export async function getTopRatedMovies(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}
//////////////////////////////////////////////////////////////
//Search
export async function searchMovies(query, page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(
      query,
    )}&language=en-US&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  return response.json();
}
//////////////////////////////////////////////////
export async function getFeaturedMovie() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured movie");
  }

  const data = await response.json();

  return data.results?.[0] || null;
}
