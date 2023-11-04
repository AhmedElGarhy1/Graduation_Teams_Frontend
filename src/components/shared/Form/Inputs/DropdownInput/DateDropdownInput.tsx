import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DropdownInput from '.';
import { dateDropdownConstants } from '../../../../../data/constants/dropdown';
import CustomInput from '../CustomInput';

interface ParamsType {
  setDate: (s: string) => void;
}

const DateDrowdownInput: FC<ParamsType> = ({ setDate }) => {
  const { t } = useTranslation();

  return (
    <div className="w-96">
      <CustomInput name={t('filterByDate')} error="">
        <DropdownInput
          defaultValue={dateDropdownConstants[0].value}
          data={dateDropdownConstants}
          register={{
            name: 'DateDropdown',
            onChange: async (event) => {
              setDate(event.target.value);
            },
            ref: null as any,
            onBlur: null as any,
          }}
        />
      </CustomInput>
    </div>
  );
};

export default DateDrowdownInput;
