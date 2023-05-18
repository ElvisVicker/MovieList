import { useEffect, useState } from "react"
import axios from "axios"
import Cards from "../card/Card"
import '../card/Card.css';
import { Row, Col } from "react-bootstrap";
import { Params, useParams } from "react-router-dom";
export default function MovieList() {


    const [data, setData] = useState([])
    const { type } = useParams()


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        axios.get(url)
            .then(function (response) {
                setData(response.data.results)
                console.log(response.data.results)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [type])

    return (
        <div className="containerCards">
            <Row>


                {
                    data.map((movie, index) => (<Cards key={index} movie={movie} />))
                }
            </Row>
        </div>

    )
}







