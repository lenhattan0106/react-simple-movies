import React from "react";
import MoviesList from "../components/movies/MoviesList";
import Banner from "../components/banner/Banner";

const HomePages = () => {
  return (
    <>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now Playing
        </h2>
        <MoviesList type="now_playing"></MoviesList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Top Rated
        </h2>
        <MoviesList type="top_rated"></MoviesList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MoviesList type="popular"></MoviesList>
      </section>
    </>
  );
};

export default HomePages;
