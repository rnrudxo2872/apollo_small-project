import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``

export default ({id, bg}) => {
    return(<Container>
            <Link to={`/${id}`}><img src={bg}></img></Link>
        </Container>)
}