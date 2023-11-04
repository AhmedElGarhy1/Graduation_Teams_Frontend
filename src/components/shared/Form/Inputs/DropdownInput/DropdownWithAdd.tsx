import { FC } from 'react';
import { Button } from '../../../Button';
import DropdownInput, { IDropdownParams } from './index';

interface ParmasType extends IDropdownParams {
  canCreate?: boolean;
}

const DropdownWithAdd: FC<ParmasType> = ({ canCreate, ...rest }) => {
  return (
    <div className="relative w-[80%]">
      {canCreate && (
        <Button
          type="button"
          size="sm"
          className=" translate-x-[-99%] top-1/2 translate-y-[-50%] py-[10px] px-4  text-white text-4xl absolute z-1 left-0"
        >
          + جديد
        </Button>
      )}

      <DropdownInput {...rest} />
    </div>
  );
};

export default DropdownWithAdd;
