// utils/ApolloClientSetup.js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const httpLink = createHttpLink({
  uri: "https://server.neers.com.pk/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken");
  console.log("Auth Token:", token); // Log the token to verify presence
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const router = useRouter();
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message === "Not authenticated") {
        toast.error("Session expired. Please log in again.");
        router.push("/signin");
      }
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
