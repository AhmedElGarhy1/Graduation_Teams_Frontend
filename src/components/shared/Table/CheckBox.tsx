import { FC } from 'react';

interface CheckBoxProps {
  indeterminate?: boolean;
}

export const CheckBox: FC<CheckBoxProps> = ({ indeterminate, ...rest }) => {
  return (
    <>
      <input
        className="w-[22px] h-[22px] mx-1 accent-success"
        type="checkbox"
        {...rest}
      />
    </>
  );
};
