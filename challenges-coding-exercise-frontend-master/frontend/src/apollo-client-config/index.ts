import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http'
import config from 'config/api.config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: config.apolloEndpoint,
});

const client = new ApolloClient({
    cache, link
})

export default client;