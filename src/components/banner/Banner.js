import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import {Swiper,SwiperSlide} from "swiper/react";
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=9a269f9058611e17907aea4dd2230cf5`, fetcher);
    const movies = data?.results || [] ;
    return (
    <section className="banner h-[600px] page-container mb-20 overflow-hidden">
     <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 && movies.map((item)=>(
        <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
        </SwiperSlide>
        ))}
    </Swiper>   
    </section>
    );
};
function BannerItem({item}){
    const {title,
      vote_average,
      release_date,
      poster_path,
      id
    } = item;
  const navigate = useNavigate();
  return (
      <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg "></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full mb-10 text-white content left-5 bottom-5">
            <h2 className="mb-5 text-3xl font-bold">{title}</h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
            </div>
          <Button onClick={()=>navigate(`/movie/${id}`)}  bgColor='primary'>Watch Now</Button>
          </div>
        </div>
  )
}

export default Banner;