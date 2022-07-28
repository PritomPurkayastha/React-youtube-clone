
import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
// import Filter from "./Components/Filter";
import SearchPage from "./Components/SearchPage";
import Watch from "./Components/Watch/Watch";
import { Routes, Route } from "react-router-dom";
import State from "./Context/State";
import Explore from "./Components/ExplorePage/Explore";
import TrendingVideos from "./Components/ExplorePage/TrandingPage/TrendingVideos";
import Loading from "./Components/Loading";


const Videos = lazy(function () {
  return import("./Components/Videos");
});

function App() {
  return (
    <State>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <Sidebar />
                <div className="main-section">
                  {/* <Filter className="filterComponent"/> */}
                  <Videos />
                </div>
              </div>
            }
          />
          <Route
            path="/React-youtube-clone/"
            element={
              <div className="main">
                <Sidebar />
                <div className="main-section">
                  <Suspense fallback={<Loading/>}>
                    <Videos />
                  </Suspense>
                </div>
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="main">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route path="/watch" element={<Watch />} />
          <Route path="/c" element={<Sidebar />} />
          <Route
            path="/feed/explore"
            element={
              <div className="main">
                <Sidebar />
                <Explore />
              </div>
            }
          />
          <Route
            path="/feed/trending"
            element={
              <div className="main">
                <Sidebar />
                <TrendingVideos />
              </div>
            }
          />
        </Routes>
      </div>
    </State>
  );
}

export default App;
