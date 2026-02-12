export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const api_key="9a269f9058611e17907aea4dd2230cf5";
const tmdbEndpoint="https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch="https://api.themoviedb.org/3/search/movie";

export const tmdbAPI = {
    //https://api.themoviedb.org/3/movie/now_playing?api_key=9a269f9058611e17907aea4dd2230cf5&language=en-US&page=1
    getMovieList: (type, page=1)=>`${tmdbEndpoint}/${type}?api_key=${api_key}&page=${page}`,
    getMovieSearch:(query,page)=>`${tmdbEndpointSearch}?api_key=${api_key}&query=${query}&page=${page}`,

    // `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`
    getMovieDetails:(movieId)=>`${tmdbEndpoint}/${movieId}?api_key=${api_key}`,
    // getMovieCredits:(movieId)=> `${tmdbEndpoint}/${movieId}/credits?api_key=${api_key}`,
    // getMovieVideos:(movieId)=>`${tmdbEndpoint}/${movieId}/videos?api_key=${api_key}`,
    // getMoviesSimilar:(movieId)=> `${tmdbEndpoint}/${movieId}/similar?api_key=${api_key}`
    getMovieMeta:(movieId,query)=>`${tmdbEndpoint}/${movieId}/${query}?api_key=${api_key}`,
    imageOriginal:(url)=>`https://image.tmdb.org/t/p/original/${url}`,
    imageW500:(url)=>`https://image.tmdb.org/t/p/w500${url}`

};