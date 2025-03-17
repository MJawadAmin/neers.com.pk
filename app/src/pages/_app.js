import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://server.neers.com.pk/graphql", // Replace with your GraphQL API
});

// Attach Token to Headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken"); // Ensure token exists
  return {
    headers: {
      ...headers,
      authorization: token ,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
