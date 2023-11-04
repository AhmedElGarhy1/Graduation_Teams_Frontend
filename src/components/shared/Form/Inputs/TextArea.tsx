import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ParamsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: UseFormRegisterReturn;
}

const TextArea: FC<ParamsType> = ({ register = {}, className, ...props }) => {
  return (
    <textarea
      {...register}
      {...props}
      className={`custom-input ${className}`}
    ></textarea>
  );
};

export default TextArea;
