import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
