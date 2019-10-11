import * as React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import DashboardScreen from 'views/dashboard';
import PokemonScreen from 'views/pokemon';
import client from 'apollo-client-config';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () =>  {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.Fragment>
          <Route exact={true} path={`/`} component={DashboardScreen}/>
          <Route exact={true} path={`/:name`} component={PokemonScreen} />
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  ) 
}
export default App;