import { addDays } from 'date-fns';
import { useCallback } from 'react';
import { formatDateToString } from '../utils';

const useGetStartEndDates = (date: string) => {
  const dates = useCallback(
    () => ({
      startDate: date,
      endDate: formatDateToString(addDays(new Date(), 1)) || '',
    }),
    [date]
  );
  return dates();
};

export default useGetStartEndDates;
