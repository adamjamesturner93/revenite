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

  if (rest.disabled || !register || !name) {
    return (
      <div className="mt-3">
        <label className="text-sm">
          {label}
          <input disabled {...rest} className={classes} />
        </label>
      </div>
    );
  }

  const props = register && name && { ...register(name, options) };

  if (!props) throw new Error();

  return (
    <div className="mt-3">
      <label className="text-sm">
        {label}
        <input {...props} {...rest} className={classes} />
      </label>
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </div>
  );
};
