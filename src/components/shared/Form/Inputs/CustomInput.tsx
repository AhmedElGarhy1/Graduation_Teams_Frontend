import { FC, ReactNode } from 'react';
import ErrorMessage from '../ErrorMessage';

interface ParamsType {
  name: string;
  error: string | undefined;
  children: ReactNode;
  sm?: boolean;
}

const CustomInput: FC<ParamsType> = ({ name, error, children, sm }) => {
  return (
    <div className={`w-full ${sm ? 'h-[110px]' : 'h-[128px]'} `}>
      <div
        className={`flex flex-col 
      ${sm ? 'gap-1' : 'gap-4'}`}
      >
        <label
          className={`${
            sm ? 'text-2xl text-gray-600' : 'text-4xl'
          } font-semibold`}
        >
          {name}
        </label>
        {children}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};

export default CustomInput;
