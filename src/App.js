import "swiper/css";
import Banner from "./components/banner/Banner";
import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import ErrorPage from "pages/ErrorPage";
const HomePage = lazy(()=> import("./pages/HomePages"));
const MoviesPageV2 = lazy(()=> import("./pages/MoviesPagesV2"));
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
            element={<MoviesPageV2></MoviesPageV2>}
          ></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
             <Route
            path="*"
            element={<ErrorPage></ErrorPage>}
          ></Route>
        </Route>
      </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
