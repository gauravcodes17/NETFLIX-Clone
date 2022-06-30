const API_KEY = "5886a7d8f4943ea5e6bd23145c0a4e55";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchSciFicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const tvrequests = {
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionAdventureShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchAnimationShows: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchDramaShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyShows: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  fetchKidsShows: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchMysteryShows: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchRealityShows: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchSciFicFantasyShows: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchTalkShows: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  fetchWarPoliticsShows: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchWesternShows: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchDocumentariesShows: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
