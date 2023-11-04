// export type TGenders = (typeof genders)[number];
export type IGenderConstants = TConstantType<genderEnum>;

enum genderEnum {
  'MALE' = 'Male',
  FEMALE = 'Female',
}

export const gendersConstants: IGenderConstants[] = [
  { _name: 'patients.male', value: genderEnum.MALE },
  { _name: 'patients.female', value: genderEnum.FEMALE },
];
