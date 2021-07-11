import React from "react";
import { gql } from 'apollo-boost'
import { useQuery } from "@apollo/client";

const  GET_MOVIE = gql(`
    {
        movies {
            id
            medium_cover_image
        }
    }
`)

export default function Home() {
    const {loading, error, data} = useQuery(GET_MOVIE)
    console.log(loading, error);
    if(loading){
        return "loading..."
    }
    if(data && data.movies){
        return <div>{data.movies.map(m => <div><h1>{m.id}</h1> <img src={m.medium_cover_image}></img></div>)}</div>
    }
}