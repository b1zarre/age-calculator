import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DateInput from './DateInput';
import IconArrow from '../../assets/images/icon-arrow.svg';
import { calculateAge } from '../../utils/calculateAge';
import { animateValues } from '../../utils/animateValues';
import { DATE_INPUT_PROP_VALUES } from '../../constants/dateInputPropValues';

import styles from './AgeCalculator.module.scss';

export const AgeCalculator = () => {
  const daysRef = useRef<HTMLSpanElement>(null);
  const monthsRef = useRef<HTMLSpanElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const [formValues, setFormValues] = useState<{
    days: number;
    months: number;
    years: number;
  }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    animateValues(daysRef, formValues?.days);
    animateValues(monthsRef, formValues?.months);
    animateValues(yearsRef, formValues?.years);
  }, [formValues?.days, formValues?.months, formValues?.years]);

  const displayCalculatedValue = (
    ref: React.RefObject<HTMLSpanElement>,
    unit: 'days' | 'months' | 'years',
  ) => {
    return (
      <p>
        <span ref={ref} className={styles.ageValue}>
          {(formValues && formValues[unit]) ?? '--'}
        </span>{' '}
        {unit}
      </p>
    );
  };

  return (
    <div className={styles.calculator}>
      <form
        onSubmit={handleSubmit((data) =>
          setFormValues(calculateAge(data.day, data.month, data.year)),
        )}
      >
        <div className={styles.inputs}>
          {DATE_INPUT_PROP_VALUES.map((el, i) => (
            <DateInput
              key={el.name + i}
              register={register}
              error={errors[el.name]}
              {...el}
            />
          ))}
        </div>
        <div className={styles.btnBlock}>
          <div className={styles.divider}></div>
          <button>
            <img src={IconArrow} alt="" />
          </button>
        </div>
        <div className={styles.calculations}>
          {displayCalculatedValue(yearsRef, 'years')}
          {displayCalculatedValue(monthsRef, 'months')}
          {displayCalculatedValue(daysRef, 'days')}
        </div>
      </form>
    </div>
  );
};
