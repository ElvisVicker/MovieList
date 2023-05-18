import { Link, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import MovieDetail from "./components/movieDetail/MovieDetail"
import MovieList from "./components/movieList/MovieList"

export default function App() {

    return (
        <div>

            <Header />
            
            <Routes>
                <Route path="/" element={<Home />}></Route>


                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
            </Routes>

      



        </div>
    )




}