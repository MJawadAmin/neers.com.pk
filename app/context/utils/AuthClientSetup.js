// utils/ApolloClientSetup.js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

const httpLink = createHttpLink({
  uri: "https://server.neers.com.pk/graphql",
});

// ✅ Fix: Ensure localStorage exists before accessing it
const authLink = setContext((_, { headers }) => {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("authToken") || "";
  }
  console.log("Auth Token:", token);

  return {
    headers: {
      ...headers,
      authorization: token , // ✅ Fix: Add "Bearer" prefix
    },
  };
});

// ✅ Fix: Remove `useRouter()` and use `window.location.href`
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message === "Not authenticated") {
        toast.error("Session expired. Please log in again.");
        window.location.href = "/signin"; // ✅ Redirect without `useRouter`
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
