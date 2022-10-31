import { useQuery } from "@tanstack/react-query"

const useQueryApi = (key:string[], payload:any) => {
    const { data, isLoading } = useQuery([key], payload)
    return {
      data,
      isLoading
    }
}

export default useQueryApi;