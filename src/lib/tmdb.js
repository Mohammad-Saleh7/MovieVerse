const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const getLanguage = (locale) => (locale === "fa" ? "fa-IR" : "en-US");

// Movies
export async function getPopularMovies(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
}

export async function getNowPlayingMovies(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
}

export async function getUpcomingMovies(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return response.json();
}

export async function getMovieDetails(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return response.json();
}

export async function getMovieRecommendations(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie recommendations");
  }

  return response.json();
}

// Trailer
export async function getMovieVideos(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie videos");
  }

  const data = await response.json();

  // اگر فارسی بود ولی ویدئو نداشت، انگلیسی را امتحان کن
  if (locale === "fa" && (!data.results || data.results.length === 0)) {
    const fallbackResponse = await fetch(
      `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    );

    if (fallbackResponse.ok) {
      return fallbackResponse.json();
    }
  }

  return data;
}

// Cast
export async function getMovieCredits(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }

  return response.json();
}

// TV Shows
export async function getPopularTvShows(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular TV shows");
  }

  return response.json();
}

export async function getTvShowDetails(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show details");
  }

  return response.json();
}

export async function getTvShowRecommendations(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show recommendations");
  }

  return response.json();
}

export async function getTvShowVideos(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show videos");
  }

  const data = await response.json();

  if (locale === "fa" && (!data.results || data.results.length === 0)) {
    const fallbackResponse = await fetch(
      `${TMDB_BASE_URL}/tv/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    );

    if (fallbackResponse.ok) {
      return fallbackResponse.json();
    }
  }

  return data;
}

export async function getTvShowCredits(id, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch TV show credits");
  }

  return response.json();
}

export async function getTopRatedTvShows(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated TV shows");
  }

  return response.json();
}

// Trending
export async function getTrendingMovies(locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
}

// Top Rated
export async function getTopRatedMovies(page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}

// Search
export async function searchMovies(query, page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(
      query,
    )}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  return response.json();
}

// Featured
export async function getFeaturedMovie(locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured movie");
  }

  const data = await response.json();

  return data.results?.[0] || null;
}

export async function searchTvShows(query, page = 1, locale = "en") {
  const language = getLanguage(locale);

  const response = await fetch(
    `${TMDB_BASE_URL}/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(
      query,
    )}&language=${language}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search TV shows");
  }

  return response.json();
}
