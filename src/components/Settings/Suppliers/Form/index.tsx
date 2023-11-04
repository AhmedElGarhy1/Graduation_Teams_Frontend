import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  TSupplier,
  supplierSchema,
} from '../../../../utils/validation/supplier';
import AddButton from '../../../shared/Button/AddButton';
import CustomInput from '../../../shared/Form/Inputs/CustomInput';
import TextInput from '../../../shared/Form/Inputs/TextInput';

interface ParamsType {
  sendRequest: (data: TSupplier) => void;
  isLoading: boolean;
  defaultValues?: TSupplier;
}

const SupplierForm: FC<ParamsType> = ({
  defaultValues,
  sendRequest,
  isLoading,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSupplier>({
    resolver: zodResolver(supplierSchema),
    defaultValues: defaultValues,
    mode: 'all',
  });

  const { t } = useTranslation();

  const submitRequest = async (data: TSupplier) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px]">
      <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
        <div className="flex flex-col gap-5">
          <div className="w-[500px]">
            <CustomInput name={t('name')} error={errors.name?.message}>
              <TextInput register={register('name')} />
            </CustomInput>
          </div>
        </div>
        <AddButton disabled={isLoading} isUpdate={!!defaultValues?.id} />
      </form>
    </div>
  );
};

export default SupplierForm;
