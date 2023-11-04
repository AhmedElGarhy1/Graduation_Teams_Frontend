import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TDrug, drugSchema } from '../../../../utils/validation/prescription';
import AddButton from '../../../shared/Button/AddButton';
import CustomInput from '../../../shared/Form/Inputs/CustomInput';
import TextArea from '../../../shared/Form/Inputs/TextArea';
import TextInput from '../../../shared/Form/Inputs/TextInput';
import InputSupplierAutoComplete from './InputSupplierAutoComplete';

interface ParamsType {
  sendRequest: (data: TDrug) => void;
  isLoading: boolean;
  defaultValues?: TDrug;
}

const DrugForm: FC<ParamsType> = ({
  defaultValues,
  sendRequest,
  isLoading,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<TDrug>({
    resolver: zodResolver(drugSchema),
    defaultValues: defaultValues,
    mode: 'all',
  });

  const { t } = useTranslation();

  const submitRequest = async (data: TDrug) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px] ">
      <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <CustomInput name={t('drug')} error={errors.drug_name?.message}>
              <TextInput register={register('drug_name')} />
            </CustomInput>
            <div className="w-1/2">
              <CustomInput name={t('type')} error={errors?.type?.message}>
                <TextInput register={register('type')} />
              </CustomInput>
            </div>
            <CustomInput name={t('dose')} error={errors?.dose?.message}>
              <TextInput register={register('dose')} />
            </CustomInput>
          </div>
          <div className="w-[500px]">
            <CustomInput
              error={errors.supplier_id?.message}
              name={t('settings.suppliers.supplier')}
            >
              <Controller
                control={control}
                name="supplier_id"
                render={({ field }) => (
                  <InputSupplierAutoComplete
                    value={field.value}
                    setValue={(newId) => field.onChange(newId)}
                    defaultName={defaultValues?.supplier}
                  />
                )}
              />
            </CustomInput>
          </div>
          <div className="mb-14">
            <CustomInput error={errors.notes?.message} name={t('note')}>
              <TextArea register={register('notes')} rows={3} />
            </CustomInput>
          </div>
        </div>
        <AddButton disabled={isLoading} isUpdate={!!defaultValues?.id} />
      </form>
    </div>
  );
};

export default DrugForm;
