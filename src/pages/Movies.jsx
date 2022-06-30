import React from "react";
import "../App.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../requests";

const Movies = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
          type="movie"
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row
          title="Action Movies"
          fetchURL={requests.fetchActionMovies}
          isLargeRow
        />
        <Row
          title="Adventure Movies"
          fetchURL={requests.fetchAdventureMovies}
        />
        <Row
          title="Animation Movies"
          fetchURL={requests.fetchAnimationMovies}
        />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Crime Movies" fetchURL={requests.fetchCrimeMovies} />
        <Row title="Drama Movies" fetchURL={requests.fetchDramaMovies} />
        <Row title="Family Movies" fetchURL={requests.fetchFamilyMovies} />
        <Row title="Fantasy Movies" fetchURL={requests.fetchFantasyMovies} />
        <Row title="History Movies" fetchURL={requests.fetchHistoryMovies} />
        <Row
          title="Horror Movies"
          fetchURL={requests.fetchHorrorMovies}
          isLargeRow
        />
        <Row title="Mystery Movies" fetchURL={requests.fetchMysteryMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row
          title="Science Fiction Movies"
          fetchURL={requests.fetchSciFicMovies}
          isLargeRow
        />
        <Row title="Thriller Movies" fetchURL={requests.fetchThrillerMovies} />
        <Row title="War Movies" fetchURL={requests.fetchWarMovies} isLargeRow />
        <Row title="Western Movies" fetchURL={requests.fetchWesternMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default Movies;
