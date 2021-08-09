import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from './components/Lanches';
import Launch from './components/Launch';
import logo from './logo.png';
import './App.css';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
        
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
         
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />


        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
