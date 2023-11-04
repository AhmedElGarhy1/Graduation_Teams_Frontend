import { FormControl, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface IDropdownParams {
  data: TConstantType<any>[];
  isLoading?: boolean;
  register: UseFormRegisterReturn;
  defaultValue: any;
  onSelect?: (v: any) => void;
  haveNone?: boolean;
}

const DropdownInput: FC<IDropdownParams> = ({
  data,
  register,
  defaultValue,
  onSelect,
  haveNone = false,
}) => {
  const { t } = useTranslation();
  const handleOnChange = (e: any) => {
    register.onChange(e);
    const currentRecord = data.find((ele) => ele.value == e.target.value);
    onSelect && onSelect(currentRecord as any);
  };

  return (
    <FormControl fullWidth>
      <Select
        className="custom-input py-0"
        {...register}
        defaultValue={defaultValue}
        MenuProps={{
          disableScrollLock: true,
        }}
        onChange={handleOnChange}
        sx={{
          outline: 'none',
          fontSize: 36,
          fontWeight: 'normal',
        }}
      >
        {(haveNone ? [...data, { value: null, _name: 'None' }] : data).map(
          (ele) => (
            <MenuItem key={ele.value as string} value={ele.value as string}>
              {t(ele._name)}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default DropdownInput;
