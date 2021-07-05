import React from 'react';
import { inputClasses } from '../../utils';

export const Input: React.FC<
  { errorMessage?: string; valid?: boolean; label?: string } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ errorMessage, valid, label, ...props }) => {
  const classes = inputClasses(errorMessage, valid);

  return (
    <div className="mt-3">
      <label className="text-sm">
        {label}
        <input {...props} className={classes} />
      </label>
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </div>
  );
};
