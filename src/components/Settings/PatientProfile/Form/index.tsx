import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { discountTypes } from '../../../../data/constants/dropdown/discountTypes';
import {
  TInsuranceProvider,
  insuranceProviderSchema,
} from '../../../../utils/validation/insuranceProvider';
import AddButton from '../../../shared/Button/AddButton';
import CustomInput from '../../../shared/Form/Inputs/CustomInput';
import RadioInput from '../../../shared/Form/Inputs/RadioInput';
import TextInput from '../../../shared/Form/Inputs/TextInput';

interface ParamsType {
  sendRequest: (data: TInsuranceProvider) => void;
  isLoading: boolean;
  defaultValues?: TInsuranceProvider;
}

const PatientProfileForm: FC<ParamsType> = ({
  defaultValues,
  sendRequest,
  isLoading,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<TInsuranceProvider>({
    resolver: zodResolver(insuranceProviderSchema),
    defaultValues: defaultValues,
    mode: 'all',
  });

  const { t } = useTranslation();

  const submitRequest = async (data: TInsuranceProvider) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px]">
      <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <CustomInput
              error={errors.name?.message as string}
              name={t('name')}
            >
              <TextInput register={register('name')} />
            </CustomInput>
            <CustomInput
              error={errors?.discount_amount?.message as string}
              name={t('قيمه التخفيض')}
            >
              <TextInput
                number
                register={register('discount_amount', {
                  valueAsNumber: true,
                })}
              />
            </CustomInput>
          </div>
          <div className="flex gap-10">
            <CustomInput
              error={errors?.discount_type?.message as string}
              name={t('patients.gender')}
            >
              <Controller
                control={control}
                name="discount_type"
                render={({ field }) => (
                  <RadioInput
                    options={discountTypes}
                    register={register('discount_type')}
                    value={field.value}
                  />
                )}
              />
            </CustomInput>
          </div>
        </div>
        <AddButton disabled={isLoading} isUpdate={!!defaultValues?.id} />
      </form>
    </div>
  );
};

export default PatientProfileForm;
