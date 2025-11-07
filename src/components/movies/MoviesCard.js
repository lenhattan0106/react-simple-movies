import React from 'react';

const MoviesCard = ({item}) => {
    const {title,
      vote_average,
      release_date,
      poster_path
    } = item;
    return (
        <>
          <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movies-cart bg-slate-800">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full h-[250px] object-cover rounded-lg mb-5" alt="" />
                <div className='flex flex-col flex-1'>
                 <h3 className="mb-3 text-xl font-bold ">{title}</h3>
                 <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                   <span>{new Date(release_date).getFullYear()}</span>
                   <span>{vote_average}</span>
                 </div>
                 <button className="w-full px-6 py-3 mt-auto font-medium capitalize rounded-lg bg-primary">Watch Now</button>
                </div>
             </div>
        </>
    );
};

export default MoviesCard;