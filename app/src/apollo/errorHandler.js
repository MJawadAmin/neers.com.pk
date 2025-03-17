import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      if (extensions?.code === 'UNAUTHENTICATED') {
        console.error('Authentication error:', message);
        if (typeof window !== 'undefined') {
          // Clear token and redirect to login
          localStorage.removeItem("token");
          window.location.href = '/signin'; // Redirect to login page
        }
      }
    });
  }

  if (networkError) {
    console.error(`Network error: ${networkError}`);
  }
});

export default errorLink;
