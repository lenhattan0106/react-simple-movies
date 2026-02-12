import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import {Swiper,SwiperSlide} from "swiper/react";
import { api_key, fetcher, tmdbAPI } from "../config";
import MoviesCard from "../components/movies/MoviesCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
   tmdbAPI.getMovieDetails(movieId),
    fetcher
  );
  if (!data) return null;
  const { backdrop_path,poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
        <div className="w-full h-[500px] max-w-[1000px] mx-auto relative z-10 -mt-[300px] pb-10">
            <img src={tmdbAPI.imageOriginal(poster_path)} alt="" className="object-cover w-full h-full rounded-xl" />
        </div>
      </div>
      <h1 className="mt-48 mb-10 text-4xl font-bold text-center text-white" >{title}</h1>
      {genres.length > 0 &&
      <div className="flex items-center justify-center mb-10 gap-x-5">
        {genres.map((item)=> <span className="px-2 py-4 border rounded-lg border-primary text-primary" key={item.id}>{item.name}</span>)}
      </div>}
      <p className="text-sm leading-relaxed text-center max-w-[600px] mx-auto">{overview}</p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits(){
// https://api.themoviedb.org/3/movie/{movie_id}/credits

  const { movieId } = useParams();
  const { data, error } = useSWR(
     tmdbAPI.getMovieMeta(movieId,"credits"),
    fetcher
  );
  if (!data) return null;
  const {cast} = data;
return(
  <div className="py-10">
   <h2 className="mt-10 mb-10 text-3xl text-center">Casts</h2>
   <div className="grid grid-cols-4 gap-5">
    {cast.length > 0 && cast.slice(0,8).map((item)=>(
      <div className="cast-item" key={item.id}>
        <img src={tmdbAPI.imageOriginal(item.profile_path)} className="w-full h-[350px] object-cover rounded-lg mb-3" alt="" />
        <h3 className="text-xl text-center">{item.name}</h3>
      </div>
    ))}
    </div>   
  </div>
)
}
function MovieVideos(){
  const { movieId } = useParams();
  const { data, error } = useSWR(
   tmdbAPI.getMovieMeta(movieId,"videos"),
    fetcher
  );
  if(!data) return null;
  console.log(data)
  const {results} = data;
  if(!results| results.length<=0) return null;
  return(
    <div className="py-10">
      <div className="flex flex-col gap-14">
      {results.length >0 && results.slice(0,3).map((item)=>(
         <div key={item.id}>
          <h3 className="inline-block p-3 mb-5 text-xl font-medium bg-teal-800">{item.name}</h3>
         <div className="w-full aspect-video" key={item.id}>
            <iframe width="783" height="440" src={`https://www.youtube.com/embed/${item.key}`} title="a" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            className="object-fill w-full h-full"
            ></iframe>
         </div>
         </div>
      ))}
      </div>
    </div>
  )
}
// <iframe width="783" height="440" src="https://www.youtube.com/embed/k99er0KvCp4" title="BẢN TIN ĐỒN CHUYỂN NHƯỢNG 2025: GUMAYUSI CHƯA TÁI KÝ? LPL CHI MẠNH!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
function MovieSimilar(){
    const { movieId } = useParams();
  const { data, error } = useSWR(
   tmdbAPI.getMovieMeta(movieId,"similar"),
    fetcher
  );
  if (!data) return null;
  const {results} = data;
  return (
    <div className="py-10">
        <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
      <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {results.length >0 && results.map((item)=> (
          <SwiperSlide key={item.id}>
            <MoviesCard item={item}></MoviesCard>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}
export default MovieDetailsPage;
