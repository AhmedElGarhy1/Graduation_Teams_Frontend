export type TDiscountTypes = TConstantType<discountTypesEnum>;

enum discountTypesEnum {
  PERCENTAGE = 'percentage',
  FIXED = 'fixed',
}

export const discountTypes: TDiscountTypes[] = [
  { _name: 'نسبه مئويه', value: discountTypesEnum.PERCENTAGE },
  { _name: 'قيمه ثابته', value: discountTypesEnum.FIXED },
];
