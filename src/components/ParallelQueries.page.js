import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("suoer-heroes", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>Hey</div>;
};

export default ParallelQueriesPage;
