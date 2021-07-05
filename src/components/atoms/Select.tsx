import React from 'react';
import { inputClasses } from '../../utils';

export const Select: React.FC<
  {
    errorMessage?: string;
    valid?: boolean;
    label: string;
    options: { label: string; value: string }[];
  } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
> = ({ errorMessage, valid, label, options, ...props }) => {
  const classes = inputClasses(errorMessage, valid);

  return (
    <div className="mt-3">
      <label className="text-sm">
        {label}
        <select {...props} className={classes} defaultValue="">
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
