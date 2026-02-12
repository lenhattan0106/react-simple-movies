import React, { useEffect, useState } from "react";
import MoviesList from "../components/movies/MoviesList";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import MoviesCard from "components/movies/MoviesCard";
import useDebounce from "hooks/useDebounced";
import ReactPaginate from 'react-paginate';

const itemsPerPage =20;
const MoviesPages = () => {  
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular",nextPage));
  const filterDebounced = useDebounce(filter, 600);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error, isLoading } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounced) {
      setUrl(
       tmdbAPI.getMovieSearch(filterDebounced,nextPage)
      );
    } else {
      setUrl(
        tmdbAPI.getMovieList("popular",nextPage)
      );
    }
  }, [filterDebounced, nextPage]);
  const movies = data?.results || [];
 
  //pagination
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(()=>{
    if(!data || !data.total_pages) return;
    setPageCount(data.total_pages);
  },[data])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setNextPage(event.selected+1)
  };
  // const { page, total_results } = data;
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
      {isLoading && (
        <div className="w-10 h-10 mx-auto border-4 rounded-full border-t-transparent border-primary animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!isLoading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MoviesCard key={item.id} item={item}></MoviesCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />  
      </div>

    </div>
  );
};

export default MoviesPages;
