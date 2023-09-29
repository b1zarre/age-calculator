export interface IDateInputPropValue {
  name: string;
  isRequired: boolean;
  placeholder: string;
  maxLength: number;
  validate?: (val: number) => boolean;
}
