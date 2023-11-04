import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { gendersConstants } from '../../../data/constants/dropdown';
import { TPatient, patientSchema } from '../../../utils/validation/patient';
import AddButton from '../../shared/Button/AddButton';
import CustomInput from '../../shared/Form/Inputs/CustomInput';
import DateInput from '../../shared/Form/Inputs/DateInput';
import RadioInput from '../../shared/Form/Inputs/RadioInput';
import TextInput from '../../shared/Form/Inputs/TextInput';
import InputInsuraceProviderAutoComplete from './InputInsuranceProviderAutoComplete';

interface ParamsType {
  sendRequest: (data: TPatient) => void;
  isLoading: boolean;
  defaultValues?: TPatient;
}

const AddPatientForm: FC<ParamsType> = ({
  isLoading,
  defaultValues,
  sendRequest,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<TPatient>({
    resolver: zodResolver(patientSchema),
    defaultValues: defaultValues,
    mode: 'all',
  });
  console.log(errors);

  const { t } = useTranslation();

  const submitRequest = async (data: TPatient) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px] ">
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
              error={errors?.phone?.message as string}
              name={t('phone')}
            >
              <TextInput number register={register('phone')} />
            </CustomInput>
            <CustomInput
              error={errors?.address?.message as string}
              name={t('patients.address')}
            >
              <TextInput register={register('address')} />
            </CustomInput>
          </div>
          <div className="flex gap-10">
            <CustomInput
              error={errors?.gender?.message as string}
              name={t('patients.gender')}
            >
              {/* <RadioInput
                options={gendersConstants}
                register={register('gender')}
                value={gender}
              /> */}
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <RadioInput
                    options={gendersConstants}
                    register={register('gender')}
                    value={field.value}
                  />
                )}
              />
            </CustomInput>

            <CustomInput
              error={errors?.birthdate?.message as string}
              name={t('patients.dateOfBirth')}
            >
              <Controller
                control={control}
                name="birthdate"
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(date) => field.onChange(date)}
                  />
                )}
              />
            </CustomInput>
            <CustomInput
              error={errors?.insurance_id?.message as string}
              name={t('شركات التامين')}
            >
              <Controller
                control={control}
                name="insurance_id"
                render={({ field }) => (
                  <InputInsuraceProviderAutoComplete
                    value={field.value as any}
                    setValue={(newId) => field.onChange(newId)}
                    // defaultName={defaultValues?.insurance_id}
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

export default AddPatientForm;
