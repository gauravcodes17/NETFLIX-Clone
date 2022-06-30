import React from "react";
import "../App.css";
import TvBanner from "../components/TvBanner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import { tvrequests } from "../requests";

const TvShows = () => {
  return (
    <div className="App">
      <Navbar />
      <TvBanner />
      <Row
        title="Top Rated"
        fetchURL={tvrequests.fetchTopRated}
        isLargeRow
        type="tv"
      />
      <Row
        title="Action & Adventure"
        fetchURL={tvrequests.fetchActionAdventureShows}
      />
      <Row
        title="Animation"
        fetchURL={tvrequests.fetchAnimationShows}
        isLargeRow
      />
      <Row title="Comedy" fetchURL={tvrequests.fetchComedyShows} />
      <Row title="Crime" fetchURL={tvrequests.fetchCrimeShows} />
      <Row title="Drama" fetchURL={tvrequests.fetchDramaShows} />
      <Row title="Family" fetchURL={tvrequests.fetchFamilyShows} />
      <Row title="Kids" fetchURL={tvrequests.fetchKidsShows} />
      <Row title="Mystery" fetchURL={tvrequests.fetchMysteryShows} />
      <Row title="Reality" fetchURL={tvrequests.fetchRealityShows} isLargeRow />
      <Row
        title="Sci-Fi & Fantasy"
        fetchURL={tvrequests.fetchSciFicFantasyShows}
      />
      <Row title="Talk" fetchURL={tvrequests.fetchTalkShows} />
      <Row
        title="War & Politics"
        fetchURL={tvrequests.fetchWarPoliticsShows}
        isLargeRow
      />
      <Row title="Western" fetchURL={tvrequests.fetchWesternShows} />
      <Row
        title="Documentaries"
        fetchURL={tvrequests.fetchDocumentariesShows}
      />
    </div>
  );
};

export default TvShows;
