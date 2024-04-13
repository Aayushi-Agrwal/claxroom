"use client";

import { useEffect, useState } from "react";

interface Movie {
  _id: string;
  title: string;
  metacritic: number;
  plot: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch("/api/movies", {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          setMovies(data);
          console.log(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadMovies();
  }, []);
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
