import { subDays, subMonths, subYears } from 'date-fns';
import { formatDateToString } from '../../../utils';

export type TDateDropdown = TConstantType<string>;

const currentDate = new Date();

export const dateDropdownObject = {
  TODAY: formatDateToString(subDays(currentDate, 1)) || '',
  LAST_MONTH: formatDateToString(subMonths(currentDate, 1)) || '',
  LAST_YEAR: formatDateToString(subYears(currentDate, 1)) || '',
};

export const dateDropdownConstants: TDateDropdown[] = [
  { _name: 'today', value: dateDropdownObject.TODAY },
  { _name: 'lastMonth', value: dateDropdownObject.LAST_MONTH },
  { _name: 'lastYear', value: dateDropdownObject.LAST_YEAR },
];
