import React from 'react';
import {render} from 'react-dom';
import App from './Containers/App';
import {BrowserRouter as Router} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks"
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
)