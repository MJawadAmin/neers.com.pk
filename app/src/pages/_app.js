// src/pages/_app.js
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client"; // Import the Apollo Client instance
import "../styles/globals.css"; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;