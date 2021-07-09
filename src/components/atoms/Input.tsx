import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { inputClasses } from '../../utils';

export const Input: React.FC<
  {
    register?: UseFormRegister<any>;
    name?: string;
    errorMessage?: string;
    valid?: boolean;
    label?: string;
    initialValue?: string;
  } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ register, name, errorMessage, valid, label, ...rest }) => {
  const classes = inputClasses(errorMessage, valid);

  if (!register || !name) {
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
        <input {...register(name)} {...rest} className={classes} />
      </label>
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </div>
  );
};
