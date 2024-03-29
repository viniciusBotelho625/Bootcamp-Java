import React, {useEffect, useState} from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from "../../services/filmService/api";
import './style.css';
import {  toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header';

function Film() {

    const { id } = useParams();
    const [ film, setFilm ] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const baseImg = 'https://image.tmdb.org/t/p/original'

    useEffect(() =>{
        async function loadFilm() {
           await api.get(`/movie/${id}`, {
                params: {
                    language: 'pt-BR',
                }
           })
           .then((resp) => {
                setFilm(resp.data);
                setLoading(false);
                console.log(resp.data)
           })
           .catch(() => {
               console.log("filme não encontrado")
               navigate('/', { replace: true });
               return;
           })
        }

        loadFilm();

        return () => {

        }
    },[navigate, id])

    if(loading) {
        return(
            <div className="spinner">
                <div className="loading"></div>
                <div className="messege">
                    <p>Carregando Detalhes...</p>
                </div>
            </div>
        )  
    }

    const sinopse = film.overview.substr(0, [430])

    function saveFavorite() {
        const myList = localStorage.getItem("@cinecorn");

        let myFilmsSave = JSON.parse(myList) || [];

        const hasFilm = myFilmsSave.some((FilmSave) => FilmSave.id === film.id)

        if (hasFilm) {
            toast.warning("Esse filme já esta na sua lista")
            return;
        }

        myFilmsSave.push(film);
        localStorage.setItem('@cinecorn', JSON.stringify(myFilmsSave));
        toast.success("Filme salvo com sucesso!", {
            style: {
                backgroundColor: '#713200' 
            }
        })
    } 

    return(
        <>
        <Header/>
            <div className="film-card">
                <span className="close">
                    <Link to="/home" className="close">
                        <FontAwesomeIcon icon={faClose}/>
                    </Link>
                </span>
                <h1>{film.title}</h1>
                <div className="container-film">
                    <div className="card-film-img">
                        <img src={baseImg + film.backdrop_path} alt={film.title } />
                    </div>
                    <div className="film-info-sinopse">
                        <h3>Sinopse</h3>
                        <p className="text-sinopse">{`${sinopse} ...`}</p>
                        <div className="area-button">
                            <button onClick={saveFavorite}>Salvar</button>
                            <button>
                                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${film.title} Trailer`}>Trailer</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Film;