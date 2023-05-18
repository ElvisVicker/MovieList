import { useEffect, useState } from "react"
import axios from "axios"
import Cards from "../card/Card";
import '../card/Card.css';

import { useParams } from "react-router-dom"
export default function MovieDetail() {


    
    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState([])
    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`      
        axios.get(url)
            .then(function (response) {
                setData(response.data)
                console.log(response.data.results)
              
            })
            .catch(function (error) {
                console.log(error);
            })
           
    }
    useEffect(() => {
        getData()
       
    }, [id])

  

    


    return (   
            <div >
              <h1> {data&& data.title}</h1>
            </div>

    )
}







