import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard, { MoviesCardSkeleton } from "./MoviesCard";
import useSWR from "swr";
import { api_key, fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MoviesList = ({ type = "now_playing" }) => {
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(type),
    fetcher,
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="movies-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MoviesCardSkeleton></MoviesCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MoviesCardSkeleton></MoviesCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MoviesCardSkeleton></MoviesCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MoviesCardSkeleton></MoviesCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MoviesCardSkeleton></MoviesCardSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MoviesCard item={item}></MoviesCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  type: PropTypes.string.isRequired,
};
function FallbackComponent() {
  return (
    <p className="text-red-500 bg-red-50">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MoviesList, {
  FallbackComponent: FallbackComponent,
});
