import { GenericResponse } from '@model/Common'
import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'

const useGetQuery = <TQueryFnData, TError, TQueryKey extends QueryKey, TData = GenericResponse>({
    queryKey,
    queryFn,
    staleTime = 0,
    refetchOnWindowFocus = false,
    retry = 0,
    ...options
}: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError> => {
    return useQuery({
        queryKey,
        queryFn,
        staleTime,
        refetchOnWindowFocus,
        retry,
        ...options,
    })
}

export default useGetQuery
