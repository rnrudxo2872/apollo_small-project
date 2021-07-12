import React from "react";
import { useParams } from "react-router";
import {gql} from "apollo-boost"
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIE = gql`
query getMovie($id: Int!){
    movie(id:$id){
        title
        year
        medium_cover_image
        rating
        runtime
        genres
        description_intro
    }
    suggestMovie(id:$id){
        id
        title
        year
        medium_cover_image
    }
}
`

const Container = styled.div`
    display:block;
    height:100vh;
    width:100%;
`

const Title = styled.span`
font-size:30px;
font-weight:600;
`

const Year = styled.span`
`

const Description = styled.p`
`
const Poster = styled.div`
    width:50%;
    height:80%;
    background-image: url(${props => props.bg});
    background-size:cover;
    background-color: transparent;
`

const SuggetionTitle = styled.h1`
    margin:10px 0;
    margin-top:25px;
    font-size:30px;
    font-weight:600;
`

const SuggetionContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
`

const MovieDetail = () => {
    const {id} = useParams();
    const {loading, data, error} = useQuery(GET_MOVIE,{
        variables:{id:Number(id)}
    })
    
    return(
        <Container>
            <Title>{loading ? "Now Loading..." : data.movie.title}</Title>
            <Year>{data?.movie?.year}</Year>
            <Description>{data?.movie?.description_intro}</Description>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>

            <SuggetionTitle>{data && data.suggestMovie ? "추천영화" : ""}</SuggetionTitle>
            <SuggetionContainer>
                {data?.suggestMovie?.map((item) => <Movie key={item.id} id={item.id} bg={item.medium_cover_image}/>)}
            </SuggetionContainer>
        </Container>
    )
};

export default MovieDetail