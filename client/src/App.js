import './App.css';
import logo from "./logo.png"
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
} from '@apollo/client';
import Launches from './components/Launches';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>SpaceX API - Graphql &amp; Apollo Client</h1>
        <img src={logo} alt="Space x logo" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
