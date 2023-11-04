import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '.';

interface ParamsType {
  disabled: boolean;
  isUpdate: boolean;
  onClick?: Function;
}

const AddButton: FC<ParamsType> = ({ disabled, isUpdate, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-8 ltr:ml-auto rtl:mr-auto w-fit">
      <Button
        disabled={disabled}
        type="submit"
        className=" text-4xl"
        variant="primary"
        size="lg"
        onClick={onClick as any}
      >
        {isUpdate ? t('update') : t('add')}
      </Button>
    </div>
  );
};

export default AddButton;
