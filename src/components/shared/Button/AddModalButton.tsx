import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Button } from '.';

interface ParamsType {
  openModal: () => void;
  title: string;
  add: string;
}

const AddModalButton: FC<ParamsType> = ({ openModal, title, add }) => {
  return (
    <div>
      <div className="flex items-center justify-between flex-row-reverse">
        <Button size="lg" variant="primary" onClick={openModal}>
          <FontAwesomeIcon
            className="ltr:mr-2 rtl:ml-2 mb-[-3px]"
            icon={faCirclePlus}
          />
          {add}
        </Button>
        <h1 className="text-4xl font-black">{title}</h1>
      </div>
    </div>
  );
};

export default AddModalButton;
