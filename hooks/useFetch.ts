import { useState, useEffect } from "react";
import axios from "axios";
import { FetchQueryParams } from "../types/interfaces";

const useFetch = (
  endpoint: string,
  query: FetchQueryParams,
  method: string = "GET"
) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: method,
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   params: { ...query },
  //   headers: {
  //     "x-rapidapi-key": process.env.RAPID_API_KEY,
  //     "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //   },
  // };
  const options = {
    method: method,
    url: ``,
    params: { ...query },
  };
  if (endpoint === "search") {
    options.url = `https://b91c1ccfd97c494f8b6e6af4b91fff40.api.mockbin.io/`;
    if (query.num_pages && parseInt(query.num_pages.toString()) > 1) {
      options.url = `https://cc22d5cddfa541469c845b9cf4f84996.api.mockbin.io/`;
    }
  } else {
    options.url = `https://195445932296413da90577779a17572f.api.mockbin.io/`;
  }
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      console.log(process.env.RAPID_API_KEY);

      setError(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
