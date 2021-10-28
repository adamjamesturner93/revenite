import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { inputClasses } from '../../utils';

export const Select: React.FC<
  {
    register: UseFormRegister<any>;
    name: string;
    errorMessage?: string;
    valid?: boolean;
    label: string;
    options: { label: string; value: string }[];
  } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
> = ({ register, name, errorMessage, valid, label, options, ...rest }) => {
  const classes = inputClasses(errorMessage, valid);

  return (
    <div className="mt-3">
      <label className="text-sm">
        {label}
        <select {...register(name)} {...rest} className={classes} defaultValue={rest.defaultValue}>
          <option value="" disabled>
            Select your option
          </option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
          <option value="prefer_not_to_say">Prefer Not To Say</option>
        </select>
      </label>
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </div>
  );
};
