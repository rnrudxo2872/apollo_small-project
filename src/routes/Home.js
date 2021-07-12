import React from "react";
import { gql } from 'apollo-boost'
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const  GET_MOVIE = gql(`
    {
        movies {
            id
            medium_cover_image
        }
    }
`)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Header = styled.header`
 background-image: linear-gradient(-45deg,#d754ab, #fd723a);
`

const Title = styled.span`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
`

const Subtitle = styled.h3(
    [`font-size: 35px; color:white;`]
    )

const Loading = styled.div`
    font-size: 18px;
    pacity:0.5;
    font-weight:500;
    argin-top: 10px;
`

export default function Home() {
    const {loading,error,data} = useQuery(GET_MOVIE)
    console.log(loading,data);
    return (
        <Container>
            <Header>
                <Title>Apollo Get Movie</Title>
                <Subtitle>Hello!</Subtitle>
            </Header>
            {loading && <Loading>Now Loading...</Loading>}
            {!loading && data.movies && data.movies.map(movie => <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image}/>)}
        </Container>
    )
}