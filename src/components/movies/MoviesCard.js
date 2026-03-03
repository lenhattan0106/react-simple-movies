import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
import { LoadingSkeleton } from "components/loading/LoadingSkeleton";

const MoviesCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movies-cart bg-slate-800">
        <img
          src={tmdbAPI.imageW500(poster_path)}
          className="w-full h-[250px] object-cover rounded-lg mb-5"
          alt=""
        />
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-xl font-bold ">{title}</h3>
          <div className="flex items-center justify-between mb-10 text-sm opacity-50">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
          <Button onClick={() => navigate(`/movie/${id}`)} bgColor="secondary">
            Watch Now
          </Button>
        </div>
      </div>
    </>
  );
};
MoviesCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MoviesCard, {
  FallbackComponent: FallbackComponent,
});

export const MoviesCardSkeleton = () => {
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movies-cart bg-slate-800">
        <LoadingSkeleton
          width="100%"
          height="250px"
          radius="8px"
          className="mb-5"
        ></LoadingSkeleton>
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-xl font-bold ">
            <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
          </h3>
          <div className="flex items-center justify-between mb-10 text-sm opacity-50">
            <span>
              {" "}
              <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
            </span>
            <span>
              {" "}
              <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
            </span>
          </div>
          <LoadingSkeleton width="100%" height="45px" radius="6px"></LoadingSkeleton>
        </div>
      </div>
    </>
  );
};
