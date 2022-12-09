import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.hygraph.com/v2/clbfvzn8z133n01t867u55p0p/master",
	cache: new InMemoryCache()
});