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
    const {loading, error, data,} = useQuery(GET_MOVIE)
    if(loading){
        return "loading..."
    }
    if(data && data.movie){
        return data.movies.map(m => <h1>{m.id}</h1>);
    }
}