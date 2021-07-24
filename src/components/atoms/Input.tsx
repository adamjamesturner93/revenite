import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { inputClasses } from '../../utils';

export const Input: React.FC<
  {
    register?: UseFormRegister<any>;
    options?: RegisterOptions;
    name?: string;
    errorMessage?: string;
    valid?: boolean;
    label?: string;
    initialValue?: string;
  } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ register, options = {}, name, errorMessage, valid, label, ...rest }) => {
  const disabled = rest.disabled || !register || !name;
  const classes = inputClasses(errorMessage, valid, disabled);

  if (disabled) {
    return (
      <div className="mt-3">
        <label className="text-sm">
          {label}
          <input disabled {...rest} className={classes} />
        </label>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <label className="text-sm">
        {label}
        <input {...register(name, options)} {...rest} className={classes} />
      </label>
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </div>
  );
};
