import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import MoviesCard from './MoviesCard';
import useSWR from 'swr';
import { api_key, fetcher, tmdbAPI } from '../../config';

const MoviesList = ({type="now_playing"}) => {
    // const [movies ,setMovies] = useState([])
    const { data, error, isLoading } = useSWR(tmdbAPI.getMovieList(type), fetcher)
  //   useEffect(()=>{
  //    if (data && data.results) {
  //   setMovies(data.results); // lấy mảng phim thôi, không cần toàn bộ object
  // }
  //   },[data])
    const movies = data?.results || []
    console.log(movies)
    return (
        <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length >0 && movies.map((item)=> (
          <SwiperSlide key={item.id}>
            <MoviesCard item={item}></MoviesCard>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
    );
};

export default MoviesList;