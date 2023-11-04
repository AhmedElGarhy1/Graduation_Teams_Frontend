import { ar, enUS } from 'date-fns/locale';
import { FC } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../store/slices/LangSlice';
import { DATE_FORMAT } from '../../../../utils';

interface ParamsType {
  value?: Date | null;
  setValue: (v: Date) => void;
}

registerLocale('ar', ar);
registerLocale('en', enUS);

const DateInput: FC<ParamsType> = ({ setValue, value }) => {
  const language = useSelector(selectLanguage);
  return (
    <div
      className="w-full custom-data-picker"
      data-dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <DatePicker
        className="custom-input"
        selected={value}
        onChange={(date) => setValue(date as Date)}
        locale={language}
        dateFormat={DATE_FORMAT}
      />
    </div>
  );
};

export default DateInput;
