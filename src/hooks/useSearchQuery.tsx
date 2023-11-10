// import { useEffect, useState } from 'react';
// import { useQuery, useQueryClient } from 'react-query';
// import { PAGE_SIZE } from '../data/constants';
// import useDebounce from './useDebounce';

// const useSearchQuery = (
//   queryId: string,
//   queryFn: Function,
//   value: string,
//   targetName: string,
//   targetId: string
// ) => {
//   const [suggestions, setSuggestions] = useState<any[]>([]);
//   const queryClient = useQueryClient();
//   const filter = useDebounce(value, 500);

//   const { data, isLoading } = useQuery({
//     queryKey: [queryId, filter],
//     queryFn: () => queryFn(1, PAGE_SIZE, filter),
//     enabled: filter.length >= 3,
//     staleTime: 1000 * 60,
//   });

//   useEffect(() => {
//     if (!data || !data.success) return;
//     setSuggestions(createConstants<number>(data?.data, targetName, targetId));
//   }, [data]);

//   useEffect(() => {
//     if (filter.length < 3) return;
//     queryClient.invalidateQueries(['patientsSuggestions', filter]);
//   }, [filter]);

//   return { suggestions, isLoading };
// };

// export default useSearchQuery;
