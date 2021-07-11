import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri:"http://localhost:4250/"
})

export default client