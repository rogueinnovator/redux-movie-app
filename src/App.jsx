import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieListing from "./components/MovieListing/MovieListing";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home/>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/" element={<MovieListing />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
