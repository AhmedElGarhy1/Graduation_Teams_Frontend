export enum bloodTypesEnum {
  'A+' = 'A+',
  'A-' = 'A-',
  'B+' = 'B+',
  'B-' = 'B-',
  'O+' = 'O+',
  'O-' = 'O-',
  'AB+' = 'AB+',
  'AB-' = 'AB-',
}

// export type TBloodType = (typeof bloodTypes)[number];
export type TBloodConstants = TConstantType<bloodTypesEnum>;

export const bloodTypesConstants: TBloodConstants[] = Object.values(
  bloodTypesEnum
).map((value) => ({
  value: value,
  _name: value,
}));
