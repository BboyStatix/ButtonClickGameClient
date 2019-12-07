import React from 'react';
import {render} from 'react-dom';
import App from './Containers/App';
import {BrowserRouter as Router} from "react-router-dom";
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from "@apollo/react-hooks"
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities'
import {InMemoryCache} from 'apollo-boost'

const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_WEBSOCKET_URL}`,
    options: {
        reconnect: true
    }
})

const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_SERVER_URL}`
})

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
)