import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} />
      <Row
        title={"Animation Movies"}
        fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

// export default App;
