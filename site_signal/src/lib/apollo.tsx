import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.hygraph.com/v2/clc6z7qtv1r5e01uvhxz35sjd/master",
	cache: new InMemoryCache()
});