import { FC } from 'react';
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from 'react-hook-form';

import styles from './DateInput.module.scss';
import { IDateInputPropValue } from '../../../types/dateInputProps';
import { ERROR_MESSAGES } from '../../../constants/errorMessages';

interface IProps extends IDateInputPropValue {
  register: UseFormRegister<FieldValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const displayErrorMessage = (name: string, type: unknown) => {
  return (
    <p className={styles.errorMessage}>
      {type === 'validate'
        ? ERROR_MESSAGES[name]
        : type === 'required'
        ? 'This field is required'
        : ''}
    </p>
  );
};

export const DateInput: FC<IProps> = ({
  register,
  name,
  isRequired,
  placeholder,
  maxLength,
  validate,
  error,
}) => {
  return (
    <div>
      <p className={styles.dateInputLabel}>{name.toLocaleUpperCase()}</p>
      <input
        maxLength={maxLength}
        placeholder={placeholder}
        className={error ? styles['error'] : ''}
        {...register(name, { required: isRequired, validate: validate })}
        type="text"
      ></input>
      {error && displayErrorMessage(name, error.type)}
    </div>
  );
};
