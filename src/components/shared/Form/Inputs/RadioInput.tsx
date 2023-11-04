import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface ParamsType {
  options: TConstantType<any>[];
  register: UseFormRegisterReturn;
  value: any;
}

const RadioInput: FC<ParamsType> = ({ options, register, value }) => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <RadioGroup row>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                {...register}
                value={option.value}
                checked={option.value === value}
              />
            }
            label={<span className="text-4xl">{t(option._name)}</span>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
