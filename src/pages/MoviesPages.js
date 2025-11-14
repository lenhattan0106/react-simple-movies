import React, { useEffect, useState } from "react";
import MoviesList from "../components/movies/MoviesList";
import useSWR from "swr";
import { fetcher } from "../config";
import MoviesCard from "../components/movies/MoviesCard";
import useDebounce from "../hooks/useDebounced";

const MoviesPages = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=9a269f9058611e17907aea4dd2230cf5")
  const filterDebounced = useDebounce(filter, 600)
  const handleFilterChange = (e)=>{
     setFilter(e.target.value)
  }
  const { data, error, isLoading } = useSWR(
   url,
    fetcher
  );
  useEffect(()=>{
     if(filterDebounced){
       setUrl(`https://api.themoviedb.org/3/search/movie?api_key=9a269f9058611e17907aea4dd2230cf5&query=${filterDebounced}`)
     }
     else{
      setUrl("https://api.themoviedb.org/3/movie/popular?api_key=9a269f9058611e17907aea4dd2230cf5")
     }
  }, [filterDebounced])
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search"
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MoviesCard key={item.id} item={item}></MoviesCard>
          ))}
      </div>
    </div>
  );
};

export default MoviesPages;
