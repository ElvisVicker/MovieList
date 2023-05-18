import { useEffect, useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import axios from "axios"
import MovieList from "../movieList/MovieList"
export default function Home() {
    return (
        <div>
           <MovieList/>
        </div>
    )
}