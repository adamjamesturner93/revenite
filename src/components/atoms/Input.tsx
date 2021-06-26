import React from 'react';
import classnames from 'classnames';

export const Input: React.FC<
  { errorMessage?: string; valid?: boolean } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ errorMessage, valid, ...props }) => {
  const inputClasses = classnames(
    'outline-none border rounded p-2 mt-3 w-full focus:shadow-inputFocus focus:border-white border-gray-300',
    {
      'border-red-500': !!errorMessage,
      'border-green-500': valid,
    },
  );

  return (
    <React.Fragment>
      <input {...props} className={inputClasses} />
      {errorMessage && <span className="text-sm px-2 text-red-500">{errorMessage}</span>}
    </React.Fragment>
  );
};
