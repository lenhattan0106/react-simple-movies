import "swiper/css";
import Banner from "./components/banner/Banner";
import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
const HomePage = lazy(()=> import("./pages/HomePages"));
const MoviesPage = lazy(()=> import("./pages/MoviesPages"));
const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={<MoviesPage></MoviesPage>}
          ></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
