// src/components/Providers.js
"use client"; // Mark this as a Client Component

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client"; // Import the Apollo Client instance

export default function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}