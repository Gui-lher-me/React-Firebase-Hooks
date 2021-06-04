const API_KEY = "896d765ff1cba7d2d6a9c138b6c3e758"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/toprated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests

