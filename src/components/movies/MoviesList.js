import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import MoviesCard from './MoviesCard';
import useSWR from 'swr';
import { fetcher } from '../../config';
//https://api.themoviedb.org/3/movie/now_playing?api_key=9a269f9058611e17907aea4dd2230cf5&language=en-US&page=1
const MoviesList = ({type="now_playing"}) => {
    const [movies ,setMovies] = useState([])
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=9a269f9058611e17907aea4dd2230cf5`, fetcher)
    useEffect(()=>{
     if (data && data.results) {
    setMovies(data.results); // lấy mảng phim thôi, không cần toàn bộ object
  }
    },[data])
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