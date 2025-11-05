export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movies?query=${encodeURIComponent(
              query
          )}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("dafafa", data);
    return data.results;
};

// const url =
//     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//     method: "GET",
//     headers: {
//         accept: "application/json",
//         Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2M5MmU4YzAzOWY1MTIyZWFiN2MwNzJkYjlhOTk4NiIsIm5iZiI6MTc1OTYwNDEwNC4xMzEsInN1YiI6IjY4ZTE2ZDg4MTkyOTg2N2Q1ZTYxNzIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Meay17EBW9sFM6NgNEuldUrIa3VWyl5FV9yao3Owhy4",
//     },
// };

// fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));
