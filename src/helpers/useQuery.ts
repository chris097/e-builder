import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "./api/fetchApi";
// import * as dotenv from 'dotenv';
// dotenv.config();

// const { LOCALHOST } = process.env;
// console.log(process.env)

const useQueryApi = (
  key: string[],
  payload: string
) => {
  const { data, isLoading } = useQuery([key],
    () => fetchApi(`http://localhost:5400/api/v1/${payload}`))
    return {
      data,
      isLoading
    }
}

export default useQueryApi;