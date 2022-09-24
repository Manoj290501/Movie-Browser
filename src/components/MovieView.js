import Hero from "./hero";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const MovieView=()=>{
    const {id} = useParams()
    const [movieDetails, setMovieDetails]= useState({})
    const [ isLoading, setISLoading] =useState(true)


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=676161c6c2bbe0e6a5727c8440b793bb&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
            setMovieDetails(data)
            setISLoading(false)
        })
    },[id]
    )

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading...!"/>
        }

        if(movieDetails){
            const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl=`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            return(
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2>{movieDetails.original_title}</h2>
                        <p className="lead">
                            {movieDetails.overview}
                        </p>
                    </div>
                </div>
            </div>


            </>
            )
        }

    }
    return(
        renderMovieDetails()
    )
}

export default MovieView;