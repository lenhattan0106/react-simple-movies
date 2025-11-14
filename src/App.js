import MoviesCard from "./components/movies/MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MoviesList from "./components/movies/MoviesList";
import Banner from "./components/banner/Banner";
import Header from "./layout/Header";
import { Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import HomePages from "./pages/HomePages";
import MoviesPages from "./pages/MoviesPages";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePages></HomePages>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={<MoviesPages></MoviesPages>}
          ></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
