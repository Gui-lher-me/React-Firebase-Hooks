import axios from "./axios";
import React, { useEffect, useState } from "react";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        };
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={classes["row"]}>
            <h2>{title}</h2>
            <div className={classes["row_posters"]}>
                {movies.map((movie) => (
                    <img
                    className={classes["row_poster"]}
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;

