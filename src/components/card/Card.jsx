import { useEffect, useState } from "react"
import axios from "axios"
import './Card.css';
import { Link, Routes, Route } from "react-router-dom"
import MovieDetail from "../movieDetail/MovieDetail";
import { Row, Col } from "react-bootstrap";

export default function Cards(props) {
    const { movie } = props

    let id = movie.id

    return (
        <Col lg={3} md={4} sm={6} xs={12} >
            <Link to={`/movie/${id}`}>


                <div className="cards"    >
                    <img className="cardImg" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" />

                    <div className="cardTitle">
                        {movie ? movie.original_title : ""}
                    </div>

                    <div>
                        <div className="cardRelease">Release Date: {movie ? movie.release_date : ""}</div>
                        <span className="cardVote">Vote: {movie ? movie.vote_average : ""}</span>
                    </div>
                </div>
            </Link>
        </Col>

    )
}







