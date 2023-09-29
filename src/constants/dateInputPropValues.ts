import { IDateInputPropValue } from '../types/dateInputProps';
import {
  dayValidator,
  monthValidator,
  yearValidator,
} from '../utils/validators';

export const DATE_INPUT_PROP_VALUES: IDateInputPropValue[] = [
  {
    name: 'day',
    isRequired: true,
    placeholder: 'DD',
    maxLength: 2,
    validate: dayValidator,
  },
  {
    name: 'month',
    isRequired: true,
    placeholder: 'MM',
    maxLength: 2,
    validate: monthValidator,
  },
  {
    name: 'year',
    isRequired: true,
    placeholder: 'YYYY',
    maxLength: 4,
    validate: yearValidator,
  },
];
