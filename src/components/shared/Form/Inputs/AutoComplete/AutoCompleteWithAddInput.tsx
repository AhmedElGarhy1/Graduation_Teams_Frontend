import { FC } from 'react';
import { Button } from '../../../Button';
import AutoCompleteInput, { IAutoCompleteParams } from './AutoCompleteInput';

const AutoCompleteWithAddInput: FC<IAutoCompleteParams> = (props) => {
  return (
    <div className="relative w-[80%]">
      <Button
        type="button"
        size="sm"
        className=" translate-x-[-99%] top-1/2 translate-y-[-50%] py-[10px] px-4  text-white text-4xl absolute z-10 left-0"
      >
        + جديد
      </Button>

      <AutoCompleteInput {...props} />
    </div>
  );
};

export default AutoCompleteWithAddInput;
