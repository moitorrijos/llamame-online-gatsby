import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: `${process.env.GATSBY_WP_URL}/graphql`,
})
