import { useEffect, useState } from "react"
import { Link, Routes, Route } from "react-router-dom"


import Home from "../home/Home"
import Popular from "../popular/Popular"
import TopRated from "../toprated/TopRated"
import Upcoming from "../upcoming/Upcoming"
import MovieList from "../movieList/MovieList"

export default function Header() {

    return (
        <div className="header">


            <Link to="/">Home</Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">TopRated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
          

     

        </div >
    )




}