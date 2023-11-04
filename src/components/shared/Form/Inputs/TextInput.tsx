import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ParamsType extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  number?: boolean;
  inValid?: boolean;
}

const TextInput: FC<ParamsType> = ({
  register,
  number,
  inValid,
  disabled,
  className,
  ...rest
}) => {
  return (
    <input
      className={`custom-input ${
        inValid ? 'border-red-500 bg-red-200' : ''
      } ${className}`}
      type={number ? 'number' : 'text'}
      {...register}
      {...rest}
    />
  );
};

export default TextInput;
