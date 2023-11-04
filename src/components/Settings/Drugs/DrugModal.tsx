import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import drugsIcon from '../../../assets/icons/medicine.png';
import { TDrug } from '../../../utils/validation/prescription';
import TextArea from '../../shared/Form/Inputs/TextArea';
import CustomModal from '../../shared/Modal';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  data?: TDrug;
}

const DrugModal: FC<ParamsType> = ({ isOpen, closeModal, data }) => {
  const { t } = useTranslation();
  return (
    <div>
      <CustomModal
        header={t('settings.drugs.list.show.title')}
        icon={drugsIcon}
        closeModal={closeModal}
        isOpen={isOpen}
        size="md"
      >
        <div className="px-2">
          <table width="100%">
            <tbody className="text-4xl">
              <tr>
                <td className="py-4" width="50%">
                  <span className="font-bold">{t('name')}:</span>
                  <span>{data?.drug_name}</span>
                </td>
                <td width="50%">
                  <span className="font-bold">{t('type')}:</span>
                  <span>{data?.type}</span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-bold">{t('dose')}:</span>
                  <span>{data?.dose}</span>
                </td>
                <td>
                  <span className="font-bold">
                    {t('settings.drugs.list.show.numberOfTimes')}:
                  </span>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span className="font-bold">المورد: </span>
                  <span>{data?.supplier}</span>
                </td>
              </tr>
              <tr className="py-4">
                <td colSpan={2}>
                  <span className="font-bold"> {t('note')}:</span>
                  <TextArea
                    className="mt-5"
                    value={data?.notes || ''}
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CustomModal>
    </div>
  );
};

export default DrugModal;
