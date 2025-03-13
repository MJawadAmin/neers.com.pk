// Wrap the component with ApolloProvider
const WrappedFirstComponent = () => (
    <ApolloProvider client={client}>
      <FirstComponent />
    </ApolloProvider>
  );
  
  export default WrappedFirstComponent;