import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import drug from '../../../services/api/drug';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TDrug } from '../../../utils/validation/prescription';
import { Button } from '../../shared/Button';
import AddDrugModal from './AddDrugModal';

interface ParamsType {
  data: TDrug;
}

const UpdateDrug: FC<ParamsType> = ({ data }) => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DRUGS_UPDATE])) return <></>;

  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.DRUGS],
    (data: TDrug) => drug.update(data.id as any, data)
  );

  const onSendRequest = (data: TDrug) => {
    // const newData = makeAppointmentData(data);
    mutate(data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Button size="icon" variant="primary" onClick={openModal}>
        <FontAwesomeIcon className="transition-all" icon={faPen} />
      </Button>

      <AddDrugModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={data}
        isUpdate
      />
    </div>
  );
};

export default UpdateDrug;
