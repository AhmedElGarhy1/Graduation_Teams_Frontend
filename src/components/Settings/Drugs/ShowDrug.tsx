import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import { TDrug } from '../../../utils/validation/prescription';
import { Button } from '../../shared/Button';
import DrugModal from './DrugModal';

interface ParamsType {
  data: TDrug;
}

const ShowDrug: FC<ParamsType> = ({ data }) => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DRUGS_SHOW])) return <></>;

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    console.log(true);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button size="icon" variant="primary" onClick={openModal}>
        <FontAwesomeIcon className="transition-all" icon={faEye} />
      </Button>
      <DrugModal closeModal={closeModal} isOpen={isOpen} data={data} />
    </div>
  );
};

export default ShowDrug;
